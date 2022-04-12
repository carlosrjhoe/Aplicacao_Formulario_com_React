import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
// import "fontsource-roboto";

import {Container, Typography } from '@material-ui/core';
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulario de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validaCPF={validaCPF}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados)
}

function validaCPF(cpf){
  // Validação CPF
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."};
  } else {
    return {valido:true, texto:""};
  }
}

export default App;
