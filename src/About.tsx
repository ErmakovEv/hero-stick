import { TypeAnimation } from 'react-type-animation';
import Button from './Button';

type Props = {
  startGame: () => void;
  downloadCv: () => void;
};

function About({ startGame, downloadCv }: Props) {
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
              <Button cb={startGame} active={true}>
                <p>Скачать резюме ВЕСЕЛО</p>
              </Button>
              <Button cb={downloadCv} active={false}>
                <p>Скачать резюме СКУЧНО</p>
              </Button>
            </div>
          </div>
          <div className="home__hello-avatar"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
