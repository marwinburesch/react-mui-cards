import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function User({ users }) {
  const { name } = useParams();

  const user = users.find((user) => user.firstName.toLowerCase() === name);

  return (
    <>
      {user && (
        <>
          <h2>Hi my name is {user.firstName}!</h2>
          <p>I like: {user.hobbies}</p>
        </>
      )}
    </>
  );
}
