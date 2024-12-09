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
    <>
      <div className="login-container">
        <h1>Login to MyApp</h1>
        <button className="github-button" onClick={redirectToGitHub}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
          />
          Login with GitHub
        </button>
      </div>
    </>
  );
}

export default Login;
