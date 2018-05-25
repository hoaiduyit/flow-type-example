// @flow
import React from "react";
import { CommonType } from "../types";

export default class BasicType extends React.Component<*> {
  render() {
    return (
      <div>
        <CommonType number={10} string={"hello"} boolean={true} />
      </div>
    );
  }
}
