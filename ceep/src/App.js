import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import { validarCPF, validarSenha } from "./models/cadastro";
import "./App.css";
import "fontsource-roboto";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ValidacoesCadastro from "./components/context/ValidacoesCadastro";


class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;