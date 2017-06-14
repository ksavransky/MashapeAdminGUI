import React, { Component } from 'react';
import {Modal, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

export const ModalTrigger = React.createClass({
  getInitialState() {
    return { show: false };
  },

  render() {
    let close = () => this.setState({ show: false});

    const formInstance = (
      <Form>
        <FormGroup controlId="">
          <ControlLabel>name</ControlLabel>
          <FormControl type="text" name="name" placeholder="exampleapi2" />
        </FormGroup>

        <FormGroup controlId="">
          <ControlLabel>hosts</ControlLabel>
          <FormControl type="text" name="hosts" placeholder="example2.com" />
        </FormGroup>

        <FormGroup controlId="">
          <ControlLabel>uris</ControlLabel>
          <FormControl type="text" name="uris" placeholder="/my-path" />
        </FormGroup>

        <FormGroup controlId="">
          <ControlLabel>methods</ControlLabel>
          <FormControl type="text" name="methods" placeholder="GET,POST" />
        </FormGroup>

        <FormGroup controlId="">
          <ControlLabel>upstream_url</ControlLabel>
          <FormControl type="text" name="upstream_url" placeholder="https://example2.com" />
        </FormGroup>
        <Button type="submit">
          Create
        </Button>
      </Form>
    );

    return (
      <div className="modal-container">
        <div className="add-button"
          onClick={() => {
            console.log("in click");
            this.setState({show: true});
          }}
        >
         +
        </div>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Create {this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {formInstance}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});
