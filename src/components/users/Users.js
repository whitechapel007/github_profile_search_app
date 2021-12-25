import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div style={styles}>
          {users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </div>
      )}
    </>
  );
};
const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};


export default Users;
