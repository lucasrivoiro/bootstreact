import React from 'react';

interface Props {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const Container = ({ children }: Props): JSX.Element => {
  return <div className="container">{children}</div>;
};

export default Container;
