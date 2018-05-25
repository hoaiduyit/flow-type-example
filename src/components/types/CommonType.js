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
      <div>Number: {props.number} (number only)</div>
      <div>String: {props.string} (text only)</div>
      <div>{props.boolean ? "true" : "false"} (boolean type only)</div>
    </div>
  );
};
