import React from "react";
import { TextField } from "@material-ui/core";

function DadosUsuarios() {
  return (
    <form>
      <TextField id="email" label="email" type="email" />
      <TextField id="senha" label="senha" type="password" />
    </form>
  );
}

export default DadosUsuarios;
