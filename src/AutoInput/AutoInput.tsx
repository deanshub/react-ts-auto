import React, { Component } from "react";
import * as ts from "typescript";
import sourceCode from "!raw-loader!./AutoInput";

// const compilerOptions: any = { module: ts.ModuleKind.System };
const AST = ts.createSourceFile(
  "foo.ts",
  sourceCode,
  ts.ScriptTarget.ES5,
  true
);
console.log(AST);

interface IState {
  value: number;
}

interface IEvent {
  target: {
    value: string;
  };
}

export class AutoInput extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0
    };
  }

  onChange = (e: IEvent): void => {
    this.setState({
      value: Number(e.target.value)
    });
  };

  public render() {
    const { value } = this.state;
    return <input value={value} onChange={this.onChange} />;
  }
}
