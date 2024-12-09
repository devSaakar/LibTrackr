import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_USER_REPOSITORY,
  GET_REPOSITORY,
  GET_USER_REPOSITORIES,
  UPDATE_USER_REPOSITORY_VERSION,
} from "../queries";
import { Button } from "./ui/button";
import ReleaseNotes from "./ReleaseNotes";

interface RepoDetailsProps {
  id: string;
  isExistingRepo: boolean;
  userRepoDetail: any;
}

const RepoDetails: React.FC<RepoDetailsProps> = ({
  id,
  isExistingRepo,
  userRepoDetail,
}) => {
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

  const [updateUserRepository] = useMutation(UPDATE_USER_REPOSITORY_VERSION, {
    refetchQueries: [
      { query: GET_USER_REPOSITORIES, variables: { user_id: "1" } },
    ],
  });

  const { user_repository_version, id: userRepoId } = userRepoDetail || {};

  const { repository } = data || {};
  const { name, description, version, release_notes } = repository || {};
  console.log("user_repository_id,version", user_repository_version, version);
  const handleClick = () => {
    addUserRepository({
      variables: {
        user_id: "1",
        repository_id: id,
        user_repository_version: version,
      },
    });
  };

  const markRead = () => {
    updateUserRepository({
      variables: {
        id: userRepoId,
        user_repository_version: version,
      },
    });
  };

  return (
    <div>
      {loading ? (
        <div>Loading...;</div>
      ) : (
        <div className="flex flex-col gap-8">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <p className="text-4xl font-bold	">{name} :</p>
              <p className="text-4xl font-semibold">{version}</p>
            </div>
            {isExistingRepo && user_repository_version !== version && (
              <Button onClick={markRead}>Mark As Read</Button>
            )}
            {!isExistingRepo && <Button onClick={handleClick}>Add</Button>}
          </div>
          <p>{description}</p>
          {release_notes?.length && (
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold">Release Notes</p>
              <ReleaseNotes releaseNotes={release_notes} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RepoDetails;
