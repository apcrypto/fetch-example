import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getUniversities } from "../../services/getUniversities";
import { University } from "../types/university";

const UniversitiesList = React.memo(() => {
  const {
    isLoading,
    isError,
    data: universities,
    error,
  } = useQuery<University[], Error>({
    queryKey: ["uniData"],
    queryFn: getUniversities,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred: {error.message}</div>;

  return (
    <ul>
      {universities?.map((uni, i) => (
        <li className="list" key={i}>
          <h3 className="name">{uni.name}</h3>
          <a href={uni.web_pages[0]} target="_blank">
            {uni.web_pages[0]}
          </a>
        </li>
      ))}
    </ul>
  );
});

export default UniversitiesList;
