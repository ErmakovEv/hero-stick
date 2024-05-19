import MainPage from './MainPage';
import ParticlesContainer from './ParticlesContainer';

function App() {
  return (
    <div className="app">
      <header></header>
      <div className="particles-container">
        <ParticlesContainer />
      </div>
      <MainPage />
      <footer></footer>
    </div>
  );
}

export default App;
