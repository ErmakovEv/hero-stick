import Button from './Button';

type Props = {
  cb: () => void;
};

const ModalContentLoose = ({ cb }: Props) => {
  return (
    <div className="modal-content-loose">
      <p>В следующий раз точно повезет!</p>
      <Button cb={cb} active={false}>
        <p>Скачать резюме</p>
      </Button>
    </div>
  );
};

export default ModalContentLoose;
