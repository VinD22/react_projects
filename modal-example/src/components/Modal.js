import React from 'react'

import './modal.css';

const Modal = ({ show, closeModalHandler }) => {
    return (
        <div className="modal-wrapper"
            style={{ opacity: show ? '1' : '0' }}
        >
            <div className="modal-header">
                <p>Welcome</p>
                <span className="close-modal-btn" onClick={closeModalHandler}> x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Modal</h4>
                    <p>netur, doloribus nobis distinctio! Adipisci, odit repellat. Ab accusantium quia ex asperiores.</p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={closeModalHandler}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
