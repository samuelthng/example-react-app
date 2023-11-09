import './App.css';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponentB />
        <ComponentA />
      </header>
    </div>
  );
}

export default App;
