import { Button } from "./ui/button";

function Login() {
  // Function to redirect the user to the GitHub OAuth authorization page
  function redirectToGitHub() {
    const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const redirect_uri = "http://localhost:3000";
    const scope = "read:user";

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;

    window.location.href = authUrl;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">

      <Button
        onClick={redirectToGitHub}
        className="flex items-center gap-2 bg-gray-900 border  border-gray-400 text-white hover:bg-gray-700"
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          className="w-5 h-5"
        />
        Sign in with GitHub
      </Button>
    </div>
  );
}

export default Login;
