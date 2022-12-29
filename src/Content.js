import React from "react";
import Part from "./Part";

const Content = (props) => {
  let data = props.parts;
  let newData = data.parts
  return <div>
    {newData.map((file) => {
        return(
            <div>
                <Part part={file}/>
            </div>
        )
    })}
  </div>;
};

export default Content;
