import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

class Modal extends Component {
    state = {};

    onEscClick(evt) {
        if (evt.code === "Escape") {
            this.props.toggleModal(false)
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onEscClick.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscClick);
    }
    render() {
        return (
            createPortal(
                <div>
                    <div className={styles.overlay}>
                        <div className={styles.content}>
                            <h1>Hello... MODAL </h1>
                        </div>
                    </div>
                </div>, document.getElementById('modal'))
        )
    }


}



export default Modal;