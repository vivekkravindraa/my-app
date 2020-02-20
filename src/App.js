import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'react',
            data: []
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => {
            console.log(res);
            console.log(res.data);

            let data = res.data;

            this.setState({ data });
            console.log('state data', this.state.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleOnChangeEvent = (event) => {
        console.log(event.target.value);

        var value = event.target.value;

        this.setState({ name: value });
    }

    render() {
        console.log('render will be called');

        let { data } = this.state;

        return (
            <div className="App">
                We are now using the class component!
                <h1>I'm {this.state.name}</h1>
                <input type="text" onChange={this.handleOnChangeEvent} />
                <ul>
                    {
                        data.map((item,index) => {
                            return (
                                <li key={index}>{item.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App;
