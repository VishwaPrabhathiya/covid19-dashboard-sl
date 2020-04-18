import React from "react";
import ReactLoading from "react-loading";

function LoadingScreen(props) {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "25vh" }}
        >
          <ReactLoading type={"spin"} color={"white"} />
        </div>
        <h2 className="d-flex justify-content-center align-items-center">
          fetching data...
        </h2>
      </div>
    </>
  );
}

export default LoadingScreen;
