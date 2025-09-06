import {Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
        }
    };

    render() {
        return (
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Class Component</h2>
                <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
                        <span className="text-6xl font-extrabold text-white drop-shadow-lg">{this.state.count}</span>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <button onClick={this.decrement} className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full text-2xl transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            disabled={this.state.count === 0}>-</button>
                        
                        <button onClick={this.increment}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-2xl transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-lg"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ClassCounter;