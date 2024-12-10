import List from "../components/List";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_USER_REPOSITORY,
  GET_USER_REPOSITORIES,
  SEARCH_REPOSITORY,
} from "../queries";
import RepoDetails from "../components/RepoDetails";
import { ScrollArea } from "../components/ui/scroll-area";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import AutoComplete from "../components/ui/auto-complete";
import { debounce } from "../helperUtils";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";
import {
  AddUserRepoMutation,
  AddUserRepoMutationVariables,
  GetUserRepoQueryQuery,
  GetUserRepoQueryQueryVariables,
} from "@/gql/graphql";

const UserRepo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  // const code = searchParams.get("code");
  const libraryId = searchParams.get("libraryId");

  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);

  const { data, loading } = useQuery<
    GetUserRepoQueryQuery,
    GetUserRepoQueryQueryVariables
  >(GET_USER_REPOSITORIES, {
    variables: { user_id: "1" },
  });

  const [addUserRepository, { loading: addRepoLoading }] = useMutation<
    AddUserRepoMutation,
    AddUserRepoMutationVariables
  >(ADD_USER_REPOSITORY, {
    refetchQueries: [
      { query: GET_USER_REPOSITORIES, variables: { user_id: "1" } },
    ],
  });

  const { data: searchData } = useQuery(SEARCH_REPOSITORY, {
    variables: { search: searchValue },
    skip: !searchValue,
  });

  const { searchRepository } = searchData || {};

  useEffect(() => {
    if (searchRepository) {
      if (searchRepository.length === 1) {
        navigate(`?libraryId=${searchRepository[0].id}`);
      } else {
        const options = searchRepository.map((repo: any) => {
          return {
            value: repo.id,
            label: repo.name,
          };
        });
        setOptions(options);
      }
    }
  }, [searchRepository]);

  const { userRepositoriesByUserId } = data || {};

  const lazySetSearchValue = debounce(setSearchValue, 700);
  const handleSearch = (value: string) => {
    if (!value) if (!searchValue) setOptions([]);
    lazySetSearchValue(value);
    // setSearchValue(value);
  };
  const handleSelect = (value: string) => {
    navigate(`?libraryId=${value}`);
  };

  const isExistingRepo = useMemo(() => {
    return (
      userRepositoriesByUserId?.some(
        (repo: any) => repo.repository.id === libraryId
      ) || false
    );
  }, [userRepositoriesByUserId, libraryId]);

  const userRepoDetail = useMemo(() => {
    return userRepositoriesByUserId?.find(
      (repo: any) => repo.repository.id === libraryId
    );
  }, [userRepositoriesByUserId, libraryId]);

  const handleClick = () => {
    const selectedRepo = searchRepository?.find(
      (repo: any) => repo.id === libraryId
    );
    addUserRepository({
      variables: {
        user_id: "1",
        repository_id: libraryId as string,
        user_repository_version: selectedRepo.version,
      },
    });
  };

  return (
    <div className="flex flex-col md:px-2 lg:px-8 ">
      <div className="flex flex-col lg:flex-row">
        <ScrollArea className="basis-1/4 flex flex-col justify-start items-center  max-h-screen  overflow-y-auto px-4 cursor-pointer relative">
          <div className="absolute w-11/12">
            <div className="flex flex-row mt-4 gap-2 z-10">
              <AutoComplete
                handleSearch={handleSearch}
                options={options}
                handleSelect={handleSelect}
              />
              <Button
                disabled={isExistingRepo || loading || addRepoLoading}
                size={"lg"}
                onClick={handleClick}
              >
                Add
              </Button>
            </div>
          </div>
          <div className={cn("mt-20", libraryId ? "hidden lg:block" : "block")}>
            <List data={userRepositoriesByUserId} />
          </div>
        </ScrollArea>
        {libraryId && (
          <ScrollArea
            className={cn(
              "lg:basis-3/4 flex  flex-col items-center  max-h-screen overflow-y-auto p-4 lg:p-10",
              libraryId ? "block" : "hidden"
            )}
          >
            <RepoDetails
              id={libraryId}
              isExistingRepo={isExistingRepo}
              userRepoDetail={userRepoDetail}
            />
          </ScrollArea>
        )}
      </div>
    </div>
  );
};

export default UserRepo;
