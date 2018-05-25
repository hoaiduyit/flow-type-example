// @flow
import React from "react";

type Props = {
  number: number,
  string: string,
  boolean: boolean
};

export default (props: Props) => {
  return (
    <div>
      <div>Number: {props.number}</div>
      <div>String: {props.string}</div>
      <div>{props.boolean ? "true" : "false"}</div>
    </div>
  );
};
