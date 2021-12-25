import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { users, searchUser, clearUsers } = githubContext;
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("please Enter Something", "light");
    } else {
      searchUser(text);
      setText("");
    }
  };

  return (
    <div>
      <form action="" className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id=""
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search users"
          className="btn btn-dark btn-block"
        />
      </form>

      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear users
        </button>
      )}
    </div>
  );
};

export default Search;
