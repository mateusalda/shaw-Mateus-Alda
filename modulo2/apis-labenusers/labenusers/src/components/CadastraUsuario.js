import React from "react";

export default class CadastraUsuario extends React.Component {
    render() {
        return (
            <div>
                <label>Nome: <input value={this.props.inputName} onChange={this.props.updateInputName} /></label>
                <label>Email: <input value={this.props.inputEmail} onChange={this.props.updateInputEmail} /></label>
                <button onClick={this.props.createUser}>Cadastrar</button>
            </div>
        )
    }
}