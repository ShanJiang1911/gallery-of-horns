import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
    render () {
        return (
            <>
                <Modal show={this.props.shouldShowModal} onHide={this.props.hideModal}>
                    <Modal.Header>
                        This is the modal header.
                    </Modal.Header>
                    <Modal.Body>
                        This is the content of the Modal
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast;