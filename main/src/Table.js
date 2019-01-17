import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Full Name</th>
                <th>Number</th>
                <th>Game Playing</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.playerData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.number}</td>
                <td>{row.game}</td>
                <td><button onClick={() => props.removePlayer(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { playerData, removePlayer } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody playerData={playerData} removePlayer={removePlayer} />
            </table>
        );
    }
}

export default Table;