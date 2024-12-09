import List from "../components/List";
import { useQuery } from "@apollo/client";
import { GET_USER_REPOSITORIES, SEARCH_REPOSITORY } from "../queries";
import RepoDetails from "../components/RepoDetails";
import { ScrollArea } from "../components/ui/scroll-area";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import AutoComplete from "../components/ui/auto-complete";
import { debounce } from "../helperUtils";

const UserRepo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const libraryId = searchParams.get("libraryId");

  const { data } = useQuery(GET_USER_REPOSITORIES, {
    variables: { user_id: "1" },
  });

  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);

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

  return (
    <div className="flex flex-col px-12">
      <AutoComplete
        handleSearch={handleSearch}
        options={options}
        handleSelect={handleSelect}
      />
      <div className="flex flex-row">
        <ScrollArea className="basis-1/4 flex flex-col justify-start items-center  max-h-screen  overflow-y-auto">
          <List data={userRepositoriesByUserId} />
        </ScrollArea>
        {libraryId && (
          <ScrollArea className="basis-3/4 flex  flex-col items-center  max-h-screen overflow-y-auto p-12">
            <RepoDetails id={libraryId} isExistingRepo={isExistingRepo} />
          </ScrollArea>
        )}
      </div>
    </div>
  );
};

export default UserRepo;
