import { useMutation, useQuery } from "@apollo/client";
import {
  GET_REPOSITORY,
  GET_USER_REPOSITORIES,
  REFRESH_REPOSITORY_VERSION,
  UPDATE_USER_REPOSITORY_VERSION,
} from "../queries";
import { Button } from "./ui/button";
import ReleaseNotes from "./ReleaseNotes";
import BackButton from "./ui/back-button";
import { useNavigate } from "react-router-dom";
import {
  GetRepositoryQuery,
  GetRepositoryQueryVariables,
  UpdateUserRepoMutation,
  UpdateUserRepoMutationVariables,
  UserRepository,
} from "@/gql/graphql";

interface RepoDetailsProps {
  id: string;
  isExistingRepo: boolean;
  userRepoDetail: UserRepository;
}

const RepoDetails: React.FC<RepoDetailsProps> = ({
  id,
  isExistingRepo,
  userRepoDetail,
}) => {
  const navigate = useNavigate();

  const { loading, data } = useQuery<
    GetRepositoryQuery,
    GetRepositoryQueryVariables
  >(GET_REPOSITORY, {
    variables: { id },
  });

  const [updateUserRepository] = useMutation<
    UpdateUserRepoMutation,
    UpdateUserRepoMutationVariables
  >(UPDATE_USER_REPOSITORY_VERSION, {
    refetchQueries: [
      { query: GET_USER_REPOSITORIES, variables: { user_id: "1" } },
    ],
  });

  const [fetchLatestVersion] = useMutation(REFRESH_REPOSITORY_VERSION, {
    refetchQueries: [
      { query: GET_USER_REPOSITORIES, variables: { user_id: "1" } },
      { query: GET_REPOSITORY, variables: { id } },
    ],
  });

  const { user_repository_version, id: userRepoId } = userRepoDetail || {};

  const { repository } = data || {};
  const { name, description, version, release_notes } = repository || {};

  const markRead = () => {
    updateUserRepository({
      variables: {
        id: userRepoId,
        user_repository_version: version as string,
      },
    });
  };

  const handleRefresh = () => {
    fetchLatestVersion({
      variables: {
        id: id,
      },
    });
  };

  const handleBack = () => {
    navigate({
      pathname: window.location.pathname,
    });
  };

  return (
    <div>
      {loading ? (
        <div>Loading...;</div>
      ) : (
        <div className="flex flex-col gap-8">
          <div className="flex flex-row justify-between">
            <BackButton className={"lg:hidden"} onClick={handleBack} />
            <div className="flex flex-col lg:flex-row lg:gap-4">
              {name && (
                <p className="text-lg lg:text-4xl font-semibold lg:font-bold	">
                  {name}
                </p>
              )}
              <p className="text-md lg:text-4xl  font-semibold">{version}</p>
            </div>
            {isExistingRepo &&
              (user_repository_version !== version ? (
                <Button onClick={markRead}>Mark As Read</Button>
              ) : (
                <Button onClick={handleRefresh}>Refresh</Button>
              ))}
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
