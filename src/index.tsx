import '@babel/polyfill';
import 'animate.css';
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Accordion from 'Component/Accordion';
import Button from 'Component/Button';
import Column from 'Component/Column';
import Container from 'Component/Container';
import DataList from 'Component/DataList';
import Div from 'Component/Div';
import FloatingButtons from 'Component/FloatingButton';
import H3 from 'Component/H3';
import Icon from 'Component/Icon';
import Modal from 'Component/Modal';
import Offcanvas from 'Component/Offcanvas';
import P from 'Component/P';
import { Popover } from 'Component/Popover';
import Row from 'Component/Row';
import Strong from 'Component/Strong';
import Tooltip from 'Component/Tooltip';

import 'Style/app.scss';

const App = (): JSX.Element => {
  const [text, setText] = useState<string>();
  const [processing, setProcessing] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);
  const [offcanvas, setOffcanvas] = useState<boolean>(false);
  const [offcanvas2, setOffcanvas2] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setText(
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nam itaque eius numquam velit vel repellendus perspiciatis minus sed adipisci perferendis soluta repellat dolore tempore, labore saepe neque suscipit. Fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nam itaque eius numquam velit vel repellendus perspiciatis minus sed adipisci perferendis soluta repellat dolore tempore, labore saepe neque suscipit. Fugiat.'
      );
    }, 2000);
  }, []);

  useEffect(() => {
    if (processing) {
      setTimeout(() => {
        setProcessing(false);
      }, 2000);
    }
  }, [processing]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <FloatingButtons>
          <Tooltip title="Abrir alguma coisa">
            <Button icon="house" color="danger" />
          </Tooltip>
          <Tooltip title="Abrir alguma coisa 2">
            <Button icon="people" color="warning" />
          </Tooltip>
          <Tooltip title="Abrir alguma coisa 3">
            <Button icon="cloud-fog" color="secondary" />
          </Tooltip>
        </FloatingButtons>
        <Container bgColor="primary" bgOpacity={25} fluid shadow>
          <P numberOfPlaceholders={2}>{text}</P>
          <Button
            icon="house"
            loading={!text}
            processing={processing}
            processingText="Aguarde..."
            onClick={() => setProcessing(true)}
          >
            Um botão qualquer
          </Button>
          <Row py={3}>
            <Column xs={12} sm={3} mb={3} mbLg={0}>
              <H3 lead mb={3}>
                Tooltip (ver bugs de exibição - Ex: ao passar cursor por baixo)
              </H3>
              <Tooltip block placement="top" title="Isso é um teste de tooltip">
                <Button className="w-100" color="primary">
                  Passe o mouse
                </Button>
              </Tooltip>
            </Column>
            <Column xs={12} sm={3} mb={3} mbLg={0}>
              <H3 lead mb={3}>
                Modal
                <br />
                Ok
              </H3>
              <Button
                className="w-100"
                color="warning"
                onClick={() => setModal(true)}
              >
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
            <Column xs={12} sm={3} mb={3} mbLg={0}>
              <H3 lead mb={3}>
                Offcanvas
                <br />
                Ok
              </H3>
              <Button
                className="w-100"
                color="danger"
                onClick={() => setOffcanvas(true)}
              >
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
            <Column xs={12} sm={3} mb={3} mbLg={0}>
              <H3 lead mb={3}>
                Popover (ver bugs de espaçamento - Ex: placement top e bottom)
              </H3>
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
        <Container bgColor="primary" bgOpacity={25} fluid mt={3} shadow>
          <Row py={3}>
            <Column xs={12} xl={6} mb={3} mbLg={0}>
              <H3 lead mb={3}>
                Accordion (ver bugs)
              </H3>
              <Accordion>
                <Accordion.Item show>
                  <Accordion.Header>
                    <Strong>Accordion #1</Strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    Isso é um teste do accordion 1
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Header>
                    <Strong>Accordion #2</Strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    Isso é um teste do accordion 2
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Header>
                    <Strong>Accordion #3</Strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    Isso é um teste do accordion 3
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Column>
            <Column xs={12} xl={6} mb={3} mbLg={0}>
              <H3 lead mb={3}>
                Collapse
              </H3>
            </Column>
          </Row>
        </Container>
        <Container bgColor="primary" bgOpacity={25} fluid mt={3} shadow>
          <Row justifyContent="center" py={3}>
            <H3 lead mb={3}>
              Container / Row / Columns / Offsets (ver bugs de margin e paddings
              - Ex: mb-3 mb-lg-0)
            </H3>
            <Column lg={3}>
              <Div bgColor="light" border p={3}>
                Column 1<br />
                <i>(col-lg-3)</i>
              </Div>
            </Column>
            <Column lg={2}>
              <Div bgColor="light" border p={3}>
                Column 2<br />
                <i>(col-lg-2)</i>
              </Div>
            </Column>
            <Column lg={4}>
              <Div bgColor="light" border p={3}>
                Column 3<br />
                <i>(col-lg-4)</i>
              </Div>
            </Column>
            <Column lg={2} offsetLg={1}>
              <Div bgColor="light" border p={3}>
                Column 4<br />
                <i>(col-lg-3 offset-lg-1)</i>
              </Div>
            </Column>
          </Row>
        </Container>
        <Div p={3} bgColor="dark">
          <DataList>
            <DataList.Item
              contextMenuTitle="Menu para o mario"
              contextMenuItems={[
                {
                  icon: 'bookmark-star',
                  title: 'Isso é um teste',
                  callback: () => alert('Olá'),
                },
              ]}
            >
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                  onClick={() => alert('Teste')}
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
            <DataList.Item>
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
            <DataList.Item>
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
            <DataList.Item>
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
            <DataList.Item>
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
            <DataList.Item>
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
            <DataList.Item>
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
            <DataList.Item>
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
            <DataList.Item>
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
            <DataList.Item>
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
            <DataList.Item>
              <DataList.Column>
                <img
                  src="https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg"
                  alt=""
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                  className="rounded-circle"
                />
              </DataList.Column>
              <DataList.Column truncate>
                <DataList.Title>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae cum distinctio velit? Voluptates quaerat quod
                  beatae? Enim tempora officia culpa quae repudiandae velit,
                  dolor illum distinctio commodi excepturi, nihil delectus.
                </DataList.Title>
                <DataList.Subtitle icon="envelope-fill">
                  teste@teste.com.br
                </DataList.Subtitle>
              </DataList.Column>
              <DataList.Column>
                <DataList.Text>2</DataList.Text>
              </DataList.Column>
              <DataList.Column>3</DataList.Column>
              <DataList.Column hideXs>
                <Button onClick={() => alert('Olá')}>Teste</Button>
              </DataList.Column>
            </DataList.Item>
          </DataList>
        </Div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('app'));
