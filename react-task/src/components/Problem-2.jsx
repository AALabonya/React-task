import React, { useState } from 'react';
import {Modal, Form } from 'react-bootstrap';

const Problem2 = () => {
  const [showAllModal, setShowAllModal] = useState(false);
  const [showUSModal, setShowUSModal] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);

  const handleShowAllModal = () => setShowAllModal(true);
  const handleCloseAllModal = () => setShowAllModal(false);

  const handleShowUSModal = () => setShowUSModal(true);
  const handleCloseUSModal = () => setShowUSModal(false);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleShowAllModal}>
            All Contacts
          </button>
          <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleShowUSModal}>
            US Contacts
          </button>
        </div>

        {/* Modal A */}
        <Modal show={showAllModal} onHide={handleCloseAllModal}>
          <Modal.Header>
            <Modal.Title>All Contacts Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Content for Modal A */}
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn" style={{ backgroundColor: '#46139f', color: 'white' }}>Modal Button A</button>
              <button className="btn btn-outline-info" style={{ color: '#ff7f50' }}>Modal Button B</button>
              <button onClick={handleCloseAllModal}  className="btn btn" style={{ backgroundColor: 'white', borderColor: '#46139f', color: '#46139f' }}>Close</button>
            </div>
            <Form.Check
              type="checkbox"
              id="onlyEvenCheckbox"
              label="Only even"
              checked={onlyEven}
              onChange={() => setOnlyEven(!onlyEven)}
            />
            <Form.Control type="text" placeholder="Search" />
          </Modal.Body>
        </Modal>

        {/* Modal B */}
        <Modal show={showUSModal} onHide={handleCloseUSModal}>
          <Modal.Header>
            <Modal.Title>US Contacts Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Content for Modal B */}
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn" style={{ backgroundColor: '#46139f', color: 'white' }}>Modal Button A</button>
              <button className="btn btn-outline-info" style={{ color: '#ff7f50' }}>Modal Button B</button>
              <button onClick={handleCloseUSModal} className="btn btn" style={{ backgroundColor: 'white', borderColor: '#46139f', color: '#46139f' }}>Close</button>
            </div>
            <Form.Check
              type="checkbox"
              id="onlyEvenCheckbox"
              label="Only even"
              checked={onlyEven}
              onChange={() => setOnlyEven(!onlyEven)}
            />
            <Form.Control type="text" placeholder="Search..." />
          </Modal.Body>
         
        </Modal>
      </div>
    </div>
  );
};

export default Problem2;
