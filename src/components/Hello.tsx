import React from "react";

interface HelloProps {
    compiler: string;
    frameWork: string;
}

export const Hello = (props: HelloProps) =>
    <h1>Hello from {props.compiler} and {props.frameWork}</h1>

// export class Hello extends React.Component<HelloProps, {}> {
//   render() {
//       return (
//           <h1>Hello from {this.props.compiler} and {this.props.frameWork}</h1>
//       );
//   }
// }
