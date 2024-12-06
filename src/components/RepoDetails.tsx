import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../queries";

interface RepoDetailsProps {
  id: string; // The ID of the repository to fetch
}

const RepoDetails: React.FC<RepoDetailsProps> = ({ id }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });
  const { repository } = data || {};
  const { name, description, version, releaseNotes } = repository || {};
  return (
    <div>
      <div>{name}</div>
      <div>{version}</div>
      <div>{description}</div>
      <div>{releaseNotes}</div>
    </div>
  );
};

export default RepoDetails;
