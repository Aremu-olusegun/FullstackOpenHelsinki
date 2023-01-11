import React from "react";
import Part from "./Part";

const Content = (props) => {
  let data = props.parts;
  let newData = data;
  return (
    <div>
      {newData.map((file) => {
        return (
          <div key={file}>
            <h1>{file.name}</h1>
            <Part part={file} file={props}/>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
