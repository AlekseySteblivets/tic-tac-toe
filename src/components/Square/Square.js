import React from "react";

class Square extends React.Component {
    // state = {
    //     value: null,
    // }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square;