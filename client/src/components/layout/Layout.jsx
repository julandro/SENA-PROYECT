import React from "react";
import { Main } from "./Layout.styles";

export default function Layout({ open }) {
  return (
    <Main component="main" open={open} sx={{ flexGrow: 1, p: 3 }}>
      <h3>INICIO...</h3>
    </Main>
  );
}
