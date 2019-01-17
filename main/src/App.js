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
                'game':'One Last Riddle',
            },
            {
                'name': 'Brad Bellick',
                'number': '07883256418',
                'game':'One Last Riddle',
            },
            {
                'name': 'Lincoln Burrows',
                'number': '07883256418',
                'game':'One Last Riddle',
            },
            {
                'name': 'Fernando Sucre',
                'number': '07963212321',
                'game':'One Last Riddle',
            },
            {
                'name': 'Sara Tancredi',
                'number': '07954186684',
                'game':'One Last Riddle',
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
        this.setState({player: [...this.state.players, player]});
    }

    render() {
        const { players } = this.state;
        
        return (
            <div className="container">
                <h1>Angela's Game Shop</h1>
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />             
                
                <p>Customer List</p>
                <Table
                    playerData={players}
                    removePlayer={this.removePlayer}
                />
             </div>
        );
    }
}

export default App;