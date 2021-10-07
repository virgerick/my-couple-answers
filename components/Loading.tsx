import React, { ReactElement } from "react";
import { Container, Spinner } from "react-bootstrap";

interface Props {}

export default function Loading({}: Props): ReactElement {
  return (
    <div className="text-center" style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:100
    }}>
      <Spinner animation="border" className="m-auto p-4"></Spinner>
    <label className="mt-2">Loading</label>
    </div>
  );
}
