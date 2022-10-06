import * as React from "react";
// import styles from '../styles/Home.module.css'
// console.log(styles)
import useAppShell from "../store/useAppShell";

const NextjsRemoteComponent = () => {
  const { addToScore, score } = useAppShell();
  return (
    <nav
      style={{
        background: "#F9EBDF",
        width: "100%",
        textAlign: "center",
        color: "black",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
      }}
    >
      Remote Nextjs component hosted on localhost:8081
      <p>Score {score}</p>
      <div>
        <button onClick={() => addToScore(1)}>Add to score</button>
      </div>
    </nav>
  );
};

export default NextjsRemoteComponent;
