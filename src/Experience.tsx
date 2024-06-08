import { IoBook, IoHammer } from 'react-icons/io5';
import ExperienceContacts from './ExperienceContacts';

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
          <span>The Rolling Scopes School</span> <br />
          стажер FrontendDeveloper, ReactDeveloper
        </p>
      </div>
      <div className="info-experience-work">
        <div className="info-experience-header">
          <IoHammer />
          <h5 className="info-experience-title">Работа</h5>
        </div>
        <p className="info-experience-description">
          Я занимаюсь разработкой сложных веб-приложений для диспетчеризации в области мониторинга воздушного
          пространства
        </p>
      </div>
      <ExperienceContacts />
    </div>
  );
}

export default Experience;
