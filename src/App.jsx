import './App.css';
import { useWindowScroll } from './useWindowScroll';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header style={{ height: '2000px' }} className="App-header">
        <div>
          <Demo/>
        </div>
      </header>
    </div>
  );
}

export default App;
