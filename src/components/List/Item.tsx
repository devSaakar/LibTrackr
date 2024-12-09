import { useLocation, useNavigate } from "react-router-dom";
import CloseButton from "../ui/close-button";
import { GET_USER_REPOSITORIES, REMOVE_USER_REPOSITORY } from "../../queries";
import { useMutation } from "@apollo/client";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

const Item = ({ data }: any) => {
  const navigate = useNavigate();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const { repository, user_repository_version } = data;
  const libraryId = searchParams.get("libraryId");
  const { id, name, version } = repository;
  const handleClick = (e: any) => {
    navigate(`?libraryId=${id}`);
  };

  const [removeUserRepository, { data: removedRepo }] = useMutation(
    REMOVE_USER_REPOSITORY,
    {
      refetchQueries: [
        { query: GET_USER_REPOSITORIES, variables: { user_id: "1" } },
      ],
    }
  );

  const handleRemove = () => {
    removeUserRepository({
      variables: {
        user_id: "1",
        repository_id: id,
      },
    });
  };
  return (
    <div
      className={cn(
        "my-4 border-2 border-gray-300 flex rounded-md justify-between px-4 py-1 items-center cursor-pointer ",
        id === libraryId ? "border-gray-600" : ""
      )}
    >
      <div
        onClick={handleClick}
        className="flex gap-1  p-2 cursor-pointer justify-start"
      >
        <div className="flex gap-1 items-center">
          <p className="font-bold">{name} - </p>
          <p>{version}</p>
        </div>
        {user_repository_version !== version && (
          <Badge className="bg-gray-500" variant="default">
            New
          </Badge>
        )}
      </div>
      <CloseButton onClick={handleRemove} />
    </div>
  );
};

export default Item;
