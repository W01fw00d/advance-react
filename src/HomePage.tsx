import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function HomePage({ pathList }: any) {
  return (
    <>
      <br />
      <h1> Welcome to the Home Page</h1>
      Some React Concepts examples:
      <br />
      <br />
      {pathList.map((path: any) => (
        <Fragment key={path}>
          <Link to={path}>{path}</Link>
          <br />
          <br />
        </Fragment>
      ))}
    </>
  );
}

export default HomePage;
