import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuarios() {
    return (
        <form>
            <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default DadosUsuarios;
