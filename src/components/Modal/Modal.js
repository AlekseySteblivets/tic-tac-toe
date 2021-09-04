import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { isModalOpen } from '../../redux/selector';
import { connect } from 'react-redux';
import * as operations from '../../redux/operations';

class Modal extends Component {
    // state = {};


    onEscClick(evt) {
        if (evt.code === "Escape") {
            console.log(this.props.modal);
            this.props.toggleModal(this.props.modal)
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onEscClick.bind(this))
        // console.log(this.props.toggleModal());
        console.log(this.props.modal);
    }

    // componentWillUnmount() {
    //     window.removeEventListener('keydown', this.onEscClick);
    //     // console.log(this.props.modal);
    // }
    render() {
        console.log(this.props.modal);
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

const mapStateToProps = (state) => ({
    modal: isModalOpen(state)
})

const mapDispatchToProps = {
    toggleModal: operations.toggleModal,
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);