import './notification.css';

type Props = {
  msg: string;
};

function Notification({ msg }: Props) {
  return (
    <div className="notification">
      <span>{msg}</span> copy to clipboard
    </div>
  );
}

export default Notification;
