import { useNavigate } from "react-router-dom";
import CloseButton from "../ui/close-button";
import { GET_USER_REPOSITORIES, REMOVE_USER_REPOSITORY } from "../../queries";
import { useMutation } from "@apollo/client";

const Item = ({ data }: any) => {
  const navigate = useNavigate();
  const { repository } = data;
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
    <div className="my-12 border-2 border-sky-500 flex flex-col">
      <div className="flex justify-end items-end">
        <CloseButton onClick={handleRemove} />
      </div>
      <div
        onClick={handleClick}
        className="flex flex-col gap-2  p-8 cursor-pointer"
      >
        <div>{name}</div>
        <div>v.{version}</div>
      </div>
    </div>
  );
};

export default Item;
