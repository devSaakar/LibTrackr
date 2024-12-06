// import List from "../components/List";
import List from "@/components/List";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES, SEARCH_REPOSITORY } from "../queries";
import RepoDetails from "../components/RepoDetails";
import { useLocation } from "react-router-dom";
// import Test from "@/components/Demo/Test";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";

const UserRepo = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const libraryId = searchParams.get("libraryId");
  const { loading, error, data } = useQuery(GET_REPOSITORIES);
  const { data: searchData } = useQuery(SEARCH_REPOSITORY);
  const { repositories } = data || {};

  console.log("searchData", searchData);
  return (
    <div className="flex flex-row">
      <List data={repositories} />
      {/* <Test /> */}
      {/* <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command> */}

      {/* <ScrollArea className="basis-1/2 flex flex-col justify-start items-center  max-h-screen  overflow-y-auto">
        <List data={repositories} />
      </ScrollArea> */}
      {/* {libraryId && (
        <ScrollArea className="basis-1/2 flex  flex-col items-center  max-h-screen overflow-y-auto pt-12">
          <RepoDetails id={libraryId} />
        </ScrollArea>
      )} */}
    </div>
  );
};

export default UserRepo;
