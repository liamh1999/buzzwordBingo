import React from "react";
import Square from "./Square";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(false),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] =!squares[i]
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        let rows = []
        for (let row = 0; row < 5; ++row) {

            let columns= []
            for (let col = 0; col < 5; ++col) {
                columns.push(this.renderSquare(row * 5+col))
            }
            rows.push(
                <div className="board-row">
                    {columns}
                </div>
            )
        }
        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Board;
