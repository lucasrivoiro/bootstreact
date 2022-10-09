import '@babel/polyfill';
import 'animate.css';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Accordion from 'Component/Accordion';
import Button from 'Component/Button';
import Column from 'Component/Column';
import Container from 'Component/Container';
import Div from 'Component/Div';
import Icon from 'Component/Icon';
import Modal from 'Component/Modal';
import Offcanvas from 'Component/Offcanvas';
import P from 'Component/P';
import { Popover } from 'Component/Popover';
import Row from 'Component/Row';
import Strong from 'Component/Strong';
import { Tooltip } from 'Component/Tooltip';

import 'Style/app.scss';

const App = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);
  const [offcanvas, setOffcanvas] = useState<boolean>(false);
  const [offcanvas2, setOffcanvas2] = useState<boolean>(false);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Div
          bgColor="primary"
          bgOpacity={25}
          m={3}
          border
          borderWidth={5}
          borderColor="success"
          borderOpacity={25}
          rounded
          shadow="lg"
          position="relative"
        >
          <Div d="flex" justifyContent="center" p={3}>
            <Tooltip placement="left" title="Isso é um teste de tooltip">
              <Button sm color="primary">
                Tooltip
              </Button>
            </Tooltip>
            <Button sm color="warning" onClick={() => setModal(true)}>
              Modal
            </Button>
            <Button sm color="danger" onClick={() => setOffcanvas(true)}>
              Offcanvas
            </Button>
            <Popover
              placement="bottom"
              title="Popover"
              content="Isso é um teste de popover"
            >
              <Button sm color="success">
                Popover
              </Button>
            </Popover>
            <Modal show={modal} onClose={setModal} backdrop="static">
              <Modal.Content>
                <Modal.Header>Modal</Modal.Header>
                <Modal.Body>
                  <P>
                    <Icon name="info-circle-fill" fs={5} me={2} />
                    Isso é um teste de modal
                  </P>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    sm
                    color="outline-danger"
                    onClick={() => setModal2(true)}
                  >
                    Abrir outro modal
                  </Button>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
            <Modal show={modal2} onClose={setModal2}>
              <Modal.Content>
                <Modal.Header>Modal 2</Modal.Header>
                <Modal.Body>
                  <P>
                    <Icon name="info-circle-fill" fs={5} me={2} />
                    Isso é um novo teste de modal
                  </P>
                </Modal.Body>
              </Modal.Content>
            </Modal>
            <Offcanvas
              show={offcanvas}
              onClose={setOffcanvas}
              backdrop="static"
            >
              <Offcanvas.Header>Offcanvas</Offcanvas.Header>
              <Offcanvas.Body>
                <P>Isso é um teste de offcanvas</P>
                <Button
                  sm
                  color="outline-danger"
                  onClick={() => setOffcanvas2(true)}
                >
                  Abrir outro offcanvas
                </Button>
              </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas show={offcanvas2} onClose={setOffcanvas2}>
              <Offcanvas.Header>Offcanvas 2</Offcanvas.Header>
              <Offcanvas.Body>
                <P>Isso é um novo teste de offcanvas</P>
              </Offcanvas.Body>
            </Offcanvas>
          </Div>
        </Div>
        <Div bgOpacity={25} m={3} position="relative">
          <Accordion>
            <Accordion.Item show>
              <Accordion.Header>
                <Strong>Accordion #1</Strong>
              </Accordion.Header>
              <Accordion.Body>Isso é um teste do accordion 1</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header>
                <Strong>Accordion #2</Strong>
              </Accordion.Header>
              <Accordion.Body>Isso é um teste do accordion 2</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header>
                <Strong>Accordion #3</Strong>
              </Accordion.Header>
              <Accordion.Body>Isso é um teste do accordion 2</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Div>
        <Container fluid>
          <Row justifyContent="center">
            <Column>Column 1</Column>
            <Column>Column 2</Column>
            <Column>Column 3</Column>
            <Column>Column 4</Column>
          </Row>
        </Container>
      </BrowserRouter>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('app'));
