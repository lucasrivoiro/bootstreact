import React, {
  createContext,
  useContext,
  useState
} from 'react';
import { cn } from 'utils';

interface AccordionProps {
  alwaysOpen?: boolean
  children?: JSX.Element | JSX.Element[];
  flush?: boolean;
}

interface ItemProps {
  children: JSX.Element | JSX.Element[];
  show?: boolean;
}

interface HeaderProps {
  children: JSX.Element | JSX.Element[] | string;
}

interface BodyProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

interface ContextAccordionInterface {
  alwaysOpen: boolean;
  accordionId: string | null;
}

interface ContextItemInterface {
  headerId: string | null;
  show: boolean;
}

const ContextAccordion = createContext<ContextAccordionInterface>({
  alwaysOpen: false,
  accordionId: null
});

const ContextItem = createContext<ContextItemInterface>({
  headerId: null,
  show: false,
});

const Accordion = ({
  alwaysOpen = false,
  flush = false,
  children,
}: AccordionProps) => {
  const [accordionId] = useState<string>(
    (window.performance.now()).toString().replace('.', '')
  );

  return (
    <ContextAccordion.Provider value={{accordionId, alwaysOpen}}>
      <div 
        className={cn(
          'accordion',
          `${flush ? 'accordion-flush' : ''}`
        )}
        id={`accordion-${accordionId}`}
      >
        {children}
      </div>
    </ContextAccordion.Provider>
  );
};

const Item = ({ children, show = false }: ItemProps): JSX.Element => {
  const [headerId] = useState<string>(
    (window.performance.now()).toString().replace('.', '')
  );

  return (
    <ContextItem.Provider value={{headerId, show}}>
      <div className="accordion-item">{children}</div>
    </ContextItem.Provider>
  );
};

const Header = ({ children }: HeaderProps): JSX.Element => {
  const { headerId, show } = useContext(ContextItem);

  return (
    <ContextItem.Provider value={{headerId, show}}>
      <h2 className="accordion-header" id={`heading-${headerId}`}>
        <button
          aria-expanded="true"
          aria-controls={`#collapse-${headerId}`}
          className="accordion-button collapsed"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${headerId}`}
          type="button"
        >
          {children}
        </button>
      </h2>
    </ContextItem.Provider>
  );
};

const Body = ({ children }: BodyProps): JSX.Element => {
  const { accordionId, alwaysOpen } = useContext(ContextAccordion);
  const { headerId, show } = useContext(ContextItem);

  return (
    <div
      aria-labelledby={`heading-${headerId}`}
      data-bs-parent={
        `${!alwaysOpen ? `#accordion-${accordionId}` : false}`
      }
      className={cn(
        'accordion-collapse',
        'collapse',
        show ? 'show' : '',
      )}
      id={`collapse-${headerId}`}
    >
      <div className="accordion-body">{children}</div>
    </div>
  )
};
  
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion
