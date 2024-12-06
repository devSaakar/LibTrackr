import React from "react";
import Item from "./Item";

const List = ({ data }: any) => {
  return (
    <div>
      {data?.map((repo: any) => {
        const { id } = repo;
        return <Item key={id} data={repo} />;
      })}
    </div>
  );
};

export default List;
