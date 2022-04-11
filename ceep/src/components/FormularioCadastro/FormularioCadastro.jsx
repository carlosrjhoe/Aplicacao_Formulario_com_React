import React from "react";
import Button from "@material-ui/core/Button";

function FormularioCadastro() {
  return (
    <form>
      <label>Nome</label>
      <input type="text" />

      <label>Sobrenome</label>
      <input type="text" />

      <label>Cpf</label>
      <input type="text" />

      <label>Promoções</label>
      <input type="checkbox" />
      <label>Novidades</label>
      <input type="checkbox" />

      <Button variant="contained" color="primary">
        cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
