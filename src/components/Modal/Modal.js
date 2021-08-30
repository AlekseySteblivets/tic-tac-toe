import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Modal = () => {
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

export default Modal;