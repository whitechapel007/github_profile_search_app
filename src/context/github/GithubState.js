import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";
let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GIT_TOKEN_ID;
  githubClientSecret = process.env.REACT_APP_GIT_TOKEN_SECRET;
} else {
  githubClientId = process.env.GIT_TOKEN_ID;
  githubClientSecret = process.env.GIT_TOKEN_SECRET;
}
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //search user
  const searchUser = async (text) => {
    setLoading();
    const result = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    const search = await result.json();
    dispatch({
      type: SEARCH_USERS,
      payload: search.items,
    });
  };

  const getSingleUser = async (user) => {
    setLoading();
    const result = await fetch(
      `https://api.github.com/users/${user}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    const search = await result.json();
    dispatch({
      type: GET_USER,
      payload: search,
    });
  };

  // single repo

  const getRepo = async (user) => {
    setLoading();
    const result = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    const search = await result.json();
    dispatch({
      type: GET_REPOS,
      payload: search,
    });
  };

  //clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clearUsers,
        getSingleUser,
        getRepo,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
