import React from "react";
import NextjsRemoteComponent from "remote/nextjs-remote-component";
import NextjsRemotePage from "remote/nextjs-remote-page";
import useAppShell from 'remote/use-app-shell'
import {SharedComponent} from 'ui'

function App() {
  const { score, addToScore } = useAppShell();
  return (
    <>
      <div style={{ backgroundColor: "#CDF5F6", color: "black", padding: "30px" }}>
        <h1>
          {" "}
          This is the React App mounted on {'<div id="root"/>'} - { score }
        </h1>
        <div>
          <SharedComponent/>
        </div>
        <p>
          <button onClick={() => addToScore(1)}>Add to score</button>
        </p>
        <NextjsRemoteComponent />
        <NextjsRemotePage />
      </div>
    </>
  );
}

export default App;
