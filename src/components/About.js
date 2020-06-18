import React, { useState, useEffect } from "react";
import User from "./User";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function About() {
  const [users, setUsers] = useState([]);

  const match = useRouteMatch();

  useEffect(() => {
    async function fetchUsers() {
      const fetchedUsers = await fetch(
        "https://api.jsonbin.io/b/5eeb782a19b60f7aa95cbcc5"
      )
        .then((response) => response.json())
        .then((data) => data.users);
      setUsers(fetchedUsers);
    }
    fetchUsers();
  }, []);

  return (
    <>
      <h1>About</h1>
      <p>Many users we have, yes yes</p>
      <Switch>
        <Route exact path={`${match.url}/:name`}>
          <User users={users} />
        </Route>
      </Switch>
    </>
  );
}
