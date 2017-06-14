import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

export const createPanel = function(name, obj){
    let listItems = [];

    for(let key in obj){
      if(typeof obj[key] == 'object'){
          let innerItems = [];
          let innerVal = obj[key];
          for(let key2 in innerVal){
            innerItems.push(<ListGroupItem key={key2}> {key2}: {" "+ innerVal[key2]} </ListGroupItem>)
          }
          if(innerItems.length > 0){
                      listItems.push(<Panel className="inner-panel" collapsible header={key}>
                          <ListGroup fill>
                            <ListGroupItem> {innerItems} </ListGroupItem>
                          </ListGroup>
                        </Panel>);
          }
      } else {
        listItems.push(<ListGroupItem key={key}> {key}: {" "+ obj[key]} </ListGroupItem>);
      }
    }
    let panelInstance = (
      <Panel collapsible header={name}>
        <ListGroup fill>
          {listItems}
        </ListGroup>
      </Panel>
    );
    return panelInstance;
  }
