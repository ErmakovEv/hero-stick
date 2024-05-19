import { TypeAnimation } from 'react-type-animation';

type Props = {
  startGame: () => void;
};

function About({ startGame }: Props) {
  const handleDownload = () => {
    const cvUrl = '/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="game">
      <div className="home">
        <div className="home-hello">
          <div className="home__hello-text">
            <div className="home__hello-text-header">
              <h1>Привет, я Евгений Ермаков!</h1>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'я frontend-разработчик и инженер',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'мой стек React, Redux, Typescript',
                  1000,
                ]}
                wrapper="h3"
                speed={50}
                style={{ display: 'inline-block', textAlign: 'left' }}
                repeat={Infinity}
              />
            </div>
            <div className="home__buttons">
              <div className="home__button home__button-fun" onClick={startGame}>
                Скачать резюме ВЕСЕЛО
              </div>
              <div className="home__button" onClick={handleDownload}>
                Скачать резюме СКУЧНО
              </div>
            </div>
          </div>
          <div className="home__hello-avatar"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
