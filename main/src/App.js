import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [
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
                'game': 'Tomb of Horrors'
            }
        ]
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h1>Angela's Game Shop</h1>
                <p>Customer List</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;