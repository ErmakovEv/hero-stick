import Button from './Button';

type Props = {
  cb: () => void;
};

const ModalContentWin = ({ cb }: Props) => {
  return (
    <div className="modal-content-win">
      <p>УРА! Победа!!!</p>
      <Button cb={cb} active={true}>
        <p>Скачать резюме</p>
      </Button>
    </div>
  );
};

export default ModalContentWin;
