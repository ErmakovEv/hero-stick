import MySlider from './MySlider';
import Experience from './Experience';
import SKILLS from './Utils';

function Info() {
  return (
    <div className="info">
      <div className="info-skills">
        {SKILLS.map((logo) => {
          return (
            <div key={logo.title}>
              <div className="skills-icon">
                <logo.skillLogo size={35} />
                <div className="skills-icon-overlay">
                  <p>{logo.exp}</p>
                </div>
              </div>
            </div>
          );
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
