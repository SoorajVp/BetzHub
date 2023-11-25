// App.js
import React, { useState } from 'react';
import CustomModal from '../Modals/Modal';
import CreateAdmin from '../Modals/CreateAdmin';

const Modal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">React Modal Example</h1>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={openModal}
            >
                Open Modal
            </button>

            <CustomModal isOpen={modalIsOpen} closeModal={closeModal}>
                <CreateAdmin />
            </CustomModal>
        </div>
    );
};

export default Modal;
