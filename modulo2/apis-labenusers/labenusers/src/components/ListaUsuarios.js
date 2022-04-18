import React from "react";

export default class ListaUsuarios extends React.Component {
    render() {
        const usersList = this.props.users.map((user) => {
            return <div key={user.id}>
                <p>{user.name}</p>
                <button onClick={() => this.props.deleteUser(user.id)}>Delete</button>
                </div>
        })
        return (
            <div>
                <h3>Usuários:</h3>
                {usersList}
            </div>
        )
    }
}