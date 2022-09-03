import React from "react";

function Labels(props) {
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: props.color }}
        ></div>
        <h3 className="text-md">{props.type}</h3>
      </div>
      <h3 className="font-bold">{props.percentage}</h3>
    </div>
  );
}

export default Labels;
