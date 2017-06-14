import React, { Component } from 'react';
import {Modal, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {createEntry} from '../ajax/ajax.js'

export const ModalTrigger = React.createClass({
  getInitialState() {
    return { show: false };
  },

  render() {
    let close = () => this.setState({ show: false});
    let handleResponse = (response) => {
       close();
       this.props.updateParent();
    };
    let submitForm = (e) => {
      e.preventDefault();
      let params = {};
      document.querySelectorAll('.form-control').forEach(input => {
        params[input.name] = input.value;
      })
      createEntry(response => handleResponse(response), (this.props.title + "s"), params);
    }

    const apiParams = {
      name: "exampleapi",
      hosts: "example.com",
      uris: "/my-path",
      methods: "GET,POST",
      upstream_url: "https://example.com"
    }

    const consumerParams = {
      username: "John Doe",
      custom_id: "abc123"
    }

    const upstreamParams = {
      name: "service.v20.x",
      slots: "10"
    }

    const pluginParams = {
      Note: "This is not ready yet. It will be added in the future. Thank you."
    }

    let formGroups = [];

    let currentParams;
    if(this.props.title == "api"){
      currentParams = apiParams;
    } else if(this.props.title == "consumer"){
      currentParams = consumerParams;
    } else if(this.props.title == "upstream"){
      currentParams = upstreamParams;
    } else if(this.props.title == "plugin"){
        currentParams = pluginParams;
    }

    for(let key in currentParams){
      formGroups.push(
              <FormGroup>
                <ControlLabel>{key}</ControlLabel>
                <FormControl type="text" name={key} placeholder={currentParams[key]} />
              </FormGroup>)
    }

    const formInstance = (
      <Form>
        {formGroups}
        <Button onClick={submitForm} type="submit">
          Create
        </Button>
      </Form>
    );

    return (
      <div className="modal-container">
        <div className="add-button"
          onClick={() => {
            this.setState({show: true});
          }}
          > +
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
