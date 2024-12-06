import { useNavigate } from "react-router-dom";

const Item = ({ data }: any) => {
  const navigate = useNavigate();
  const { id, name, version } = data;
  const handleClick = (e: any) => {
    navigate(`?libraryId=${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-2 my-12 border-2 border-sky-500 p-8 cursor-pointer"
    >
      <div>{name}</div>
      <div>v.{version}</div>
    </div>
  );
};

export default Item;
