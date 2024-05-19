import { IoBook, IoHammer, IoMailOpenSharp, IoAccessibility } from 'react-icons/io5';
import { FaTelegram, FaGithub } from 'react-icons/fa';
import './experience.css';

function Experience() {
  return (
    <div className="info-experience">
      <h2 className="info-experience-main-title">Обо мне</h2>
      <div className="info-experience-education">
        <div className="info-experience-header">
          <IoBook />
          <h5 className="info-experience-title">Обучение</h5>
        </div>
        <p className="info-experience-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, incidunt.
        </p>
      </div>
      <div className="info-experience-work">
        <div className="info-experience-header">
          <IoHammer />
          <h5 className="info-experience-title">Работа</h5>
        </div>
        <p className="info-experience-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, incidunt.
        </p>
      </div>
      <div className="info-experience-contacts">
        <div className="info-experience-header">
          <IoAccessibility />
          <h5 className="info-experience-contacts-title">Контакты</h5>
        </div>
        <div className="info-experience-contacts-description">
          <div className="info-experience-contacts-description-mail" style={{ display: 'flex' }}>
            <IoMailOpenSharp />
            <h6 className="info-experience-title">Почта</h6>
          </div>
          <div className="info-experience-contacts-description-telegram" style={{ display: 'flex' }}>
            <FaTelegram />
            <h6 className="info-experience-title">Telegram</h6>
          </div>
          <div className="info-experience-contacts-description-gh" style={{ display: 'flex' }}>
            <FaGithub />
            <h6 className="info-experience-title">Github</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
