import {useState} from 'react';
import { Button, Modal } from 'react-bootstrap'; 

function Alertmodal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-primary" onClick={handleShow}>
          Don't have an account
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={{backgroundColor:'#CBC3E3'}}>
            <Modal.Title>Attention!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              You can not create a new account, because i am using a paid chat-engine.<br/>
              Please Login using any this Credentials.<br/>
              <ul>
                  <li>Username: Sample-Bot@2106</li>
                  <li>Password: public@123</li>
              </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default Alertmodal;