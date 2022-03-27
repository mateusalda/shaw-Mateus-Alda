import React from 'react';

class Conversa extends React.Component {
    render() {
        return <p><strong>{this.props.nome}:</strong> {this.props.texto}</p>
    }
}

export default Conversa;