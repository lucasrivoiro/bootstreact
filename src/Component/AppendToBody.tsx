import { createPortal } from 'react-dom';

let container = document.getElementById('appended-elements');

if (!container) {
  const body = document.querySelectorAll('body')[0];

  const div = document.createElement('div');
  div.id = 'appended-elements';

  body.append(div);

  container = document.getElementById('appended-elements');
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppendToBody = ({ children }: Props): JSX.Element => {
  return createPortal(children, container as HTMLElement);
};

export default AppendToBody;
