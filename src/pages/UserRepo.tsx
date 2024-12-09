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

const UserRepo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const libraryId = searchParams.get("libraryId");

  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);

  const { data } = useQuery(GET_USER_REPOSITORIES, {
    variables: { user_id: "1" },
  });

  const [addUserRepository, { data: newAddedRepo }] = useMutation(
    ADD_USER_REPOSITORY,
    {
      refetchQueries: [
        { query: GET_USER_REPOSITORIES, variables: { user_id: "1" } },
      ],
    }
  );

  
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
        repository_id: libraryId,
        user_repository_version: selectedRepo.version,
      },
    });
  };

  return (
    <div className="flex flex-col px-8 ">
      <div className="flex flex-row">
        <ScrollArea className="basis-1/4 flex flex-col justify-start items-center  max-h-screen  overflow-y-auto px-4 cursor-pointer">
          <div className="flex flex-row items-start mt-4 gap-2">
            <AutoComplete
              handleSearch={handleSearch}
              options={options}
              handleSelect={handleSelect}
            />
            <Button disabled={isExistingRepo} size={"lg"} onClick={handleClick}>
              Add
            </Button>
          </div>
          <List data={userRepositoriesByUserId} />
        </ScrollArea>
        {libraryId && (
          <ScrollArea className="basis-3/4 flex  flex-col items-center  max-h-screen overflow-y-auto p-12">
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
