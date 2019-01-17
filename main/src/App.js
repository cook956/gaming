import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        players: [
            {
                'name': 'Joe Caputo',
                'number': '07658312387',
                'game': 'Black Rain'
            },
            {
                'name': 'Piper Chapman',
                'number': '07142548798',
                'game': 'One Last Riddle'
            },
            {
                'name': 'Tasher Jefferson',
                'number': '07998987220',
                'game': 'The Burning Plague'
            },
            {
                'name': 'Gloria Mendoza',
                'number': '07512645873',
                'game': 'Tomb of Horrors',
            },
            {
                'name': 'Thodore Bagwell',
                'number': '07561384896',
                'game': 'One Last Riddle',
            },
            {
                'name': 'Brad Bellick',
                'number': '07883256418',
                'game': 'One Last Riddle',
            },
            {
                'name': 'Lincoln Burrows',
                'number': '07883256418',
                'game': 'One Last Riddle',
            },
            {
                'name': 'Fernando Sucre',
                'number': '07963212321',
                'game': 'One Last Riddle',
            },
            {
                'name': 'Sara Tancredi',
                'number': '07954186684',
                'game': 'One Last Riddle',
            },
            {
                'name': 'Daryl Dixon',
                'number': '07963212321',
                'game': 'The Burning Plague',
            },
            {
                'name': 'Maggie Greene',
                'number': '074598321851',
                'game': 'The Burning Plague',
            },
            {
                'name': 'Carol Peletier',
                'number': '07124979566',
                'game': 'The Burning Plague',
            },
            {
                'name': 'Eugene Porter',
                'number': '07223654987',
                'game': 'The Burning Plague',
            },
            {
                'name': 'Billy Cranston',
                'number': '07985645784',
                'game': 'The Sea Witch',
            },
            {
                'name': 'Kimberly Hart',
                'number': '07815307459',
                'game': 'The Sea Witch',
            },
            {
                'name': 'Trini Kwan',
                'number': '07548755285',
                'game': 'The Sea Witch',
            },
            {
                'name': 'Tommy Oliver',
                'number': '07989444568',
                'game': 'The Sea Witch',
            },
            {
                'name': 'Jason Scott',
                'number': '07774854987',
                'game': 'The Sea Witch',
            },
            {
                'name': 'Zack Taylor',
                'number': '07845222547',
                'game': 'The Sea Witch',
            },
            {
                'name': 'Joyce Byers',
                'number': '07954668187',
                'game': 'Tomb of Horrors',
            },
            {
                'name': 'Dustin Henderson',
                'number': '07889554857',
                'game': 'Tomb of Horrors',
            },
            {
                'name': 'Jim Hopper',
                'number': '07954845148',
                'game': 'Tomb of Horrors',
            },
            {
                'name': 'Nancy Wheeler',
                'number': '07445845711',
                'game': 'Tomb of Horrors',
            },



        ]
    };

    removePlayer = index => {
        const { players } = this.state;

        this.setState({
            players: players.filter((player, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = player => {
        this.setState({ players: [...this.state.players, player] });
    }

    render() {
        const { players } = this.state;

        return (
            <div className="container">
                <h1>Angela's Game Shop</h1>
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />

                <h3>Customer List</h3>
                <Table
                    playerData={players}
                    removePlayer={this.removePlayer}
                />
            </div>
        );
    }
}

export default App;