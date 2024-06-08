import { FaTelegram, FaGithub } from 'react-icons/fa';
import { IoMailOpenSharp, IoAccessibility } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import Notification from './Notification';

const MyContacts = {
  email: 'ev.s.ermakov@gmail.com',
  telegram: '@ErmakovEvgeni',
  github: 'https://github.com/ErmakovEv',
} as const;

type CopyTextType = (typeof MyContacts)[keyof typeof MyContacts] | '';

function ExperienceContacts() {
  const [isCopy, setIsCopy] = useState(false);
  const [copyText, setCopyText] = useState<CopyTextType>('');

  const copyToClipboard = async (id: string) => {
    try {
      switch (id) {
        case 'email':
          setIsCopy(true);
          await navigator.clipboard.writeText(MyContacts[id]);
          setCopyText(MyContacts[id]);
          break;
        case 'github':
          setIsCopy(true);
          await navigator.clipboard.writeText(MyContacts[id]);
          setCopyText(MyContacts[id]);
          break;
        case 'telegram':
          setIsCopy(true);
          await navigator.clipboard.writeText(MyContacts[id]);
          setCopyText(MyContacts[id]);
          break;
        default:
          setIsCopy(false);
          setCopyText('');
          break;
      }
    } catch (err) {
      setIsCopy(false);
    }
  };

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setIsCopy(false);
      }, 2000);
    }
  }, [isCopy]);

  return (
    <div className="info-experience-contacts">
      <div className="info-experience-header">
        <IoAccessibility />
        <h5 className="info-experience-contacts-title">Контакты</h5>
      </div>
      <div className="info-experience-contacts-description">
        <div className="info-experience-contacts-description-mail" style={{ display: 'flex' }}>
          <input
            type="radio"
            name="contacts"
            id="email"
            onClick={(e: React.MouseEvent<HTMLInputElement>) => copyToClipboard(e.currentTarget.id)}
          />
          <label htmlFor="email">
            <IoMailOpenSharp className="contacts-img" />
          </label>
        </div>
        <div className="info-experience-contacts-description-telegram" style={{ display: 'flex' }}>
          <input
            type="radio"
            name="contacts"
            id="telegram"
            onClick={(e: React.MouseEvent<HTMLInputElement>) => copyToClipboard(e.currentTarget.id)}
          />
          <label htmlFor="telegram">
            <FaTelegram className="contacts-img" />
          </label>
        </div>
        <div className="info-experience-contacts-description-gh" style={{ display: 'flex' }}>
          <input
            type="radio"
            name="contacts"
            id="github"
            onClick={(e: React.MouseEvent<HTMLInputElement>) => copyToClipboard(e.currentTarget.id)}
          />
          <label htmlFor="github">
            <FaGithub className="contacts-img" />
          </label>
        </div>
      </div>
      {isCopy ? <Notification msg={copyText} /> : null}
    </div>
  );
}

export default ExperienceContacts;
