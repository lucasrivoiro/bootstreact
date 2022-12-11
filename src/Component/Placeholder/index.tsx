import React from 'react';

import { usePlaceholder } from './hooks';
import { PlaceholderProps } from './interfaces';

const Placeholder = (props: PlaceholderProps): JSX.Element => {
  const [placeholders, size] = usePlaceholder(props);

  return (
    <>
      {placeholders.map((v, i) => (
        <span key={i.toString()} className={`placeholder col-${size()} me-1`} />
      ))}
    </>
  );
};

export default Placeholder;
