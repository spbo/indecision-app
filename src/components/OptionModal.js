import React from 'react';
import Modal from 'react-modal';

// Accessibility when using Modal
// Warning: react-modal: App element is not defined.
// Please use`Modal.setAppElement(el)` or set`appElement={el}`.
// This is needed so screen readers don't see main content when modal is opened. 
// It is not recommended, but you can opt - out by setting`ariaHideApp={false}`.
Modal.setAppElement(document.querySelector('#app'));

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    // appElement={this}
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;
