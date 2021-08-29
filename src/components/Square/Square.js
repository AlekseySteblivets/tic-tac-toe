import React from "react";

function Square({ value, onClick }) {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}

// class Square extends React.Component {
//     // state = {
//     //     value: null,
//     // }

//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

export default Square;