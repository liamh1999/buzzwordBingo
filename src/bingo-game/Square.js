import React from "react";
import { Button } from "@mui/material";
import Dictionary from "./Dictionary";

class Square extends React.Component {
    constructor(props) {
        super(props);
        const randomIndex = Math.floor(Math.random() * Dictionary.length);
        this.state = {
            word: Dictionary[randomIndex],
        };
        Dictionary.splice(randomIndex, 1);
    }

    render() {
        return (
            <Button
                className="square"
                onClick={() => this.props.onClick()}
                variant={this.props.value ? "contained" : "outlined"}
                style={{ backgroundColor: this.props.color }}
            >
                {this.state.word}
            </Button>
        );
    }
}

export default Square;
