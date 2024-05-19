import MySlider from './MySlider';
import Experience from './Experience';
import SKILLS from './Utils';

function Info() {
  return (
    <div className="info">
      <div className="info-skills">
        {SKILLS.map((logo) => {
          return <logo.skillLogo key={logo.title} className="skills-icon" />;
        })}
      </div>
      <div className="info-projects">
        <MySlider />
      </div>
      <Experience />
    </div>
  );
}

export default Info;
