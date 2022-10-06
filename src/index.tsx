import '@babel/polyfill';
import 'animate.css';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Button from 'Component/Button';
import Div from 'Component/Div';
import Icon from 'Component/Icon';
import Modal from 'Component/Modal';
import Offcanvas from 'Component/Offcanvas';
import P from 'Component/P';
import { Tooltip } from 'Component/Tooltip';
import 'Style/app.scss';

const App = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);
  const [offcanvas, setOffcanvas] = useState<boolean>(false);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Div
          bgColor="primary"
          bgOpacity={25}
          m={'auto'}
          border
          borderWidth={5}
          borderColor="success"
          borderOpacity={25}
          rounded
          shadow="lg"
          position="relative"
          mt={5}
        >
          <Div d="flex" justifyContent="center">
            <Tooltip title="Isso é um teste de tooltip">
              <Button sm color="outline-danger" onClick={() => setModal(true)}>
                Modal
              </Button>
            </Tooltip>
            <Button
              sm
              color="outline-danger"
              onClick={() => setOffcanvas(true)}
            >
              Offcanvas
            </Button>
          </Div>
          <Modal show={modal} onClose={setModal} backdrop="static">
            <Modal.Content>
              <Modal.Header>Teste</Modal.Header>
              <Modal.Body>
                <p>adadadas</p>
                <p>adadadas</p>
                <p>adadadas</p>
                <p>adadadas</p>
                <Button sm color="outline-danger" onClick={() => setModal2(true)}>
                Modal
              </Button>
              </Modal.Body>
            </Modal.Content>
          </Modal>
          <Modal show={modal2} onClose={setModal2}>
            <Modal.Content>
              <Modal.Header>Teste 2</Modal.Header>
              <Modal.Body>
                <p>adadadas</p>
                <p>adadadas</p>
                <p>adadadas</p>
                <p>adadadas</p>
              </Modal.Body>
            </Modal.Content>
          </Modal>
          <Modal show={false} onClose={setModal}>
            <Modal.Content>
              <Modal.Header>Teste</Modal.Header>
              <Modal.Body>Teste</Modal.Body>
            </Modal.Content>
          </Modal>
          <Offcanvas show={offcanvas} onClose={setOffcanvas}>
            <Offcanvas.Header>Teste</Offcanvas.Header>
            <Offcanvas.Body>
              <h1>Teste</h1>
            </Offcanvas.Body>
          </Offcanvas>
          <P textColor="success" textColorOpacity={25} align="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            asperiores recusandae nobis, cum at aut alias rem a minus dolores?
            Dolore repudiandae praesentium labore eum, laudantium soluta aliquam
            at sint?
          </P>
          <Div
            bgColor="danger"
            roundedCircle
            position="absolute"
            top={0}
            end={0}
            translateMiddle
            p={2}
          />
        </Div>
        <Div bgColor="danger" p={5} d="flex" justifyContent="center">
          <Icon name="instagram" fs={1} textColor="success" />
          <Div bgColor="dark" p={3} roundedCircle>
            Olá
          </Div>
        </Div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('app'));
