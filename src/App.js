import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";
import NoSearch from "./no-search";



function App() {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? <>
        {githubState.loding ? (
          <p>Loading...</p>
        ) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}
      </> : <NoSearch />}

    </Layout>
  );
}

export default App;
