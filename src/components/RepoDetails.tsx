import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_USER_REPOSITORY,
  GET_REPOSITORY,
  GET_USER_REPOSITORIES,
} from "../queries";
import { Button } from "./ui/button";
import ReleaseNotes from "./ReleaseNotes";

interface RepoDetailsProps {
  id: string;
  isExistingRepo: boolean;
}

const RepoDetails: React.FC<RepoDetailsProps> = ({ id, isExistingRepo }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  const [addUserRepository, { data: newAddedRepo }] = useMutation(
    ADD_USER_REPOSITORY,
    {
      refetchQueries: [
        { query: GET_USER_REPOSITORIES, variables: { user_id: "1" } },
      ],
    }
  );

  const { repository } = data || {};
  const { name, description, version, release_notes } = repository || {};
  const handleClick = () => {
    addUserRepository({
      variables: {
        user_id: "1",
        repository_id: id,
      },
    });
  };

  return (
    <div>
      <div>{name}</div>
      <div>{version}</div>
      {!isExistingRepo && <Button onClick={handleClick}>Add</Button>}
      <div>{description}</div>
      <ReleaseNotes releaseNotes={release_notes} />
    </div>
  );
};

export default RepoDetails;
