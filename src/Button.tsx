import { ReactElement } from 'react';

type Props = {
  cb: () => void;
  active: boolean;
  children: ReactElement;
};

function Button({ cb, active, children }: Props) {
  return (
    <div className={active ? 'home__button fun' : 'home__button'} onClick={cb}>
      {children}
    </div>
  );
}

export default Button;
