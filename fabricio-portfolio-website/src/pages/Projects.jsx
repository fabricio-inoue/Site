import React from "react";
import { useState, useEffect } from "react";

import RepositoryInfo from "../components/RepositoryInfo";

function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/fabricio-inoue/repos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="projectsList">
        {data.map((item) => {
          return <RepositoryInfo key={item.id} repository={item} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
