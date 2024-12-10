import React, { FC } from "react";
import Item from "./Item";
import { UserRepository } from "@/gql/graphql";

interface ListProps {
  data: [UserRepository];
}

const List: FC<ListProps> = ({ data }) => {
  return (
    <div>
      {data?.map((repo) => {
        const { id } = repo;
        return <Item key={id} data={repo} />;
      })}
    </div>
  );
};

export default List;
