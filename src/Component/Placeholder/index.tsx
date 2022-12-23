import React from 'react';

import { usePlaceholder } from './hooks';
import { PlaceholderProps } from './interfaces';

const Placeholder = (props: PlaceholderProps): JSX.Element => {
  const [placeholders, size] = usePlaceholder(props);

  return (
    <span className="d-flex flex-column gap-2">
      {placeholders.map((v, i) => (
        <span
          key={i.toString()}
          className={`d-block placeholder col-${size()} me-1`}
        />
      ))}
    </span>
  );
};

export default Placeholder;
