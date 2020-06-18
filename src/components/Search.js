import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useQuery from "../hooks/useQuery";

export default function Search() {
  const location = useLocation();
  const query = useQuery(location);
  const history = useHistory();

  const search = query.get("q");
  const filter = query.get("f");

  console.log(history);

  console.log(search);
  console.log(filter);
  return (
    <button onClick={() => history.push("/search?q=futter&f=filternbitte")}>
      Search for Futter
    </button>
  );
}
