import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { Typography } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validaCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuarios />;
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} validaCPF={validaCPF}/>;
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>Erro</Typography>
    }
  }
  return (
    <>
      {formularioAtual(etapaAtual)}
    </>
  );
}



export default FormularioCadastro;
