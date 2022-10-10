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
import H3 from 'Component/H3';
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
        <Container
          bgColor="primary"
          bgOpacity={25}
          fluid
          shadow
        >
          <Container>
            <Row py={3}>
              <Column xs={1} sm={2} offsetSm={1}>
                <H3 lead mb={3}>Tooltip (resolver bugs)</H3>
                <Tooltip placement="bottom" title="Isso é um teste de tooltip">
                  <Button className="w-100" color="primary">
                    Passe o mouse
                  </Button>
                </Tooltip>
              </Column>
              <Column sm={2} offsetSm={1}>
                <H3 lead mb={3}>Modal</H3>
                <Button className="w-100" color="warning" onClick={() => setModal(true)}>
                  Clique
                </Button>
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
              </Column>
              <Column>
                <H3 lead mb={3}>Offcanvas</H3>
                <Button className="w-100" color="danger" onClick={() => setOffcanvas(true)}>
                  Clique
                </Button>
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
              </Column>
              <Column>
                <H3 lead mb={3}>Popover (resolver bugs)</H3>
                <Popover
                  placement="bottom"
                  title="Popover"
                  content="Isso é um teste de popover"
                >
                  <Button className="w-100" color="success">
                    Clique
                  </Button>
                </Popover>
              </Column>
            </Row>
          </Container>
        </Container>
        <Container
          bgColor="primary"
          bgOpacity={25}
          fluid
          mt={3}
          shadow
        >
          <Row py={3}>
            <Column>
              <H3 lead mb={3}>Accordion (resolver bugs)</H3>
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
                  <Accordion.Body>Isso é um teste do accordion 3</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Column>
            <Column>
              Teste
            </Column>
          </Row>
        </Container>
        <Container fluid mt={3}>
          <Row justifyContent="center">
            <Column lg={3}>
              <Div bgColor="light" border p={3}>
                Column 1
              </Div>
            </Column>
            <Column lg={1}>
              <Div bgColor="light" border p={3}>
                Column 2
              </Div>
            </Column>
            <Column lg={5}>
              <Div bgColor="light" border p={3}>
                Column 3
              </Div>
            </Column>
            <Column lg={3}>
              <Div bgColor="light" border p={3}>
                Column 4
              </Div>
            </Column>
          </Row>
        </Container>
      </BrowserRouter>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('app'));
