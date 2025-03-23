import React from "react";

export default function HelloName(props) {
  return (
    <h3 className="p-3 text-3xl font-bold underline">Hello {props.name}</h3>
  );
}
