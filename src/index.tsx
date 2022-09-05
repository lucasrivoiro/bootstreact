import '@babel/polyfill';
import 'bootstrap';
import 'animate.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Div from 'Component/Div';

import 'Style/app.scss';

render(
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
        d="flex"
        justifyContent="center"
        justifyContentMd="end"
        shadow="lg"
        position="relative"
        mt={5}
      >
        Teste
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
        <Div bgColor="dark" p={3} roundedCircle>
          Olá
        </Div>
      </Div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);
