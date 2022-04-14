import { Component } from "react";
import "./App.css";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";
import FormularioCadastro from "./components/FormularioCadastro/DadosPessoais";
import DadosUsuarios from "./components/FormularioCadastro/DadosUsuarios";

class App extends Component {
    render() {
        return (
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" component="h1" align="center">
                    Formulário de cadastro
                </Typography>
                <FormularioCadastro aoEnviar={aoEnviarForm} validaCPF={validaCPF} />
                <DadosUsuarios />
            </Container>
        );
    }
}

function aoEnviarForm(dados) {
    console.log(dados);
}

function validaCPF(cpf) {
    // Validação CPF
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 digitos." };
    } else {
        return { valido: true, texto: "" };
    }
}

export default App;
