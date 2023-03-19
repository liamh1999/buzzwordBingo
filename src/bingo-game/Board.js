import { Button } from "@mui/material";
import React from "react";
import Square from "./Square";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(25).fill(false),
            isBingo: false,
        };
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(i) {

        //If bingo is already found, do nothing
        if (this.state.isBingo) return;

        const squares = this.state.squares.slice();
        squares[i] = !squares[i]

        const isBingo = this.checkBingo(squares)
        if (isBingo) {
            // getting indexes of winning squares
            const winningSquares = this.getWinningSquares(squares);

            for (let i = 0; i < winningSquares.length; i++) {
                const index = winningSquares[i];
                squares[index] = "winning-square";
            }
        }


        this.setState({
            squares: squares,
            isBingo: isBingo
        });
    }

    checkBingo(squares) {

        // Check for horizontal Bingos
        for (let i = 0; i < 25; i += 5) {
            if (squares[i] && squares[i + 1] && squares[i + 2] && squares[i + 3] && squares[i + 4]) {
                return true;
            }
        }

        // Check for vertical Bingos
        for (let i = 0; i < 5; i++) {
            if (squares[i] && squares[i + 5] && squares[i + 10] && squares[i + 15] && squares[i + 20]) {
                return true;
            }
        }

        // Check for diagonal Bingos
        if (squares[0] && squares[6] && squares[12] && squares[18] && squares[24]) {
            return true;
        }
        if (squares[4] && squares[8] && squares[12] && squares[16] && squares[20]) {
            return true;
        }

        return false;
    }

    getWinningSquares(squares) {
        const winningSquares = [];

        // Check for horizontal Bingos
        for (let i = 0; i < 25; i += 5) {
            if (squares[i] && squares[i + 1] && squares[i + 2] && squares[i + 3] && squares[i + 4]) {
                for (let j = i; j < i + 5; j++) {
                    winningSquares.push(j);
                }
                return winningSquares;
            }
        }

        // Check for vertical Bingos
        for (let i = 0; i < 5; i++) {
            if (squares[i] && squares[i + 5] && squares[i + 10] && squares[i + 15] && squares[i + 20]) {
                for (let j = i; j <= i + 20; j += 5) {
                    winningSquares.push(j);
                }
                return winningSquares;
            }
        }

        // Check for diagonal Bingos
        if (squares[0] && squares[6] && squares[12] && squares[18] && squares[24]) {
            for (let i = 0; i <= 24; i += 6) {
                winningSquares.push(i);
            }
            return winningSquares;
        }
        if (squares[4] && squares[8] && squares[12] && squares[16] && squares[20]) {
            for (let i = 4; i <= 20; i += 4) {
                winningSquares.push(i);
            }
            return winningSquares;
        }

        return winningSquares;
    }


    handleReset() {
        this.setState({
            squares: Array(25).fill(false),
            isBingo: false
        });
    }


    renderSquare(i) {

        let color = "white";
        if (this.state.squares[i] === "winning-square") color = "green";
        else if (this.state.squares[i] === true) color = "#1976d2";
        return (
            <Square
                key={i}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
                color={color}
            />
        );
    }

    render() {
        const size = 5
        const rows = Array(size).fill(0).map((it, row) => {
            const columns = Array(size).fill(0).map((it, col) =>
                this.renderSquare(row * size + col)
            )
            return (
                <div key={row} className="board-row">
                    {columns}
                </div>
            )
        })

        return (
            <div>
                <Button variant= "contained" onClick={this.handleReset}>Reset</Button>
                {rows}
            </div>
        );
    }
}

export default Board;
