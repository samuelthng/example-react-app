import './App.css';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponentA />
        <ComponentB />
      </header>
    </div>
  );
}

export default App;
