import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar, validaCPF }) {
    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validaCPF={validaCPF} />
            <DadosUsuarios />
        </>
    );
}

export default FormularioCadastro;
