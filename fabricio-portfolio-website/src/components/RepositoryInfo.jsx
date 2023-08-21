import React from "react";

import "./RepositoryInfo.css";

const RepositoryInfo = ({ repository }) => {
  return (
    <div className="repository-info">
      <h2>{repository.full_name}</h2>
      <p>{repository.description || "No description available."}</p>
      <div className="owner-info">
        <p>
          Owner:{" "}
          <a href={repository.owner.html_url}>{repository.owner.login}</a>
        </p>
      </div>
      <p>Language: {repository.language}</p>
      <p>Stars: {repository.stargazers_count}</p>
      <p>Forks: {repository.forks_count}</p>
      <p>Created at: {new Date(repository.created_at).toLocaleDateString()}</p>
      <p>
        Last updated: {new Date(repository.updated_at).toLocaleDateString()}
      </p>
      <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default RepositoryInfo;
