import { useEffect, useState } from "react";

const useFetch = (link) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUrl = async () => {
      setLoading(true);
      const url = await fetch(
        link +
          `?client_id=${process.env.REACT_APP_GIT_TOKEN_ID}&client_secret=${process.env.REACT_APP_GIT_TOKEN_SECRET}`
      );
      const data = await url.json();
      setUsers(data);
      setLoading(false);
    };

    fetchUrl();
  }, [link]);

  return {
    users,
    loading,
  };
};

export default useFetch;


