import { useNavigate } from "react-router-dom";
import CloseButton from "../ui/close-button";
import { GET_USER_REPOSITORIES, REMOVE_USER_REPOSITORY } from "../../queries";
import { useMutation } from "@apollo/client";

const Item = ({ data }: any) => {
  const navigate = useNavigate();
  const { repository, user_repository_version } = data;
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
    <div className="my-4 border-2 border-sky-500 flex flex-col rounded-md">
      <div
        onClick={handleClick}
        className="flex gap-2  p-2 cursor-pointer justify-between"
      >
        <div className="flex gap-2 items-center">
          <div>{name} - </div>
          <div>{version}</div>
        </div>
        {user_repository_version !== version && <div>New</div>}
        <CloseButton onClick={handleRemove} />
      </div>
    </div>
  );
};

export default Item;
