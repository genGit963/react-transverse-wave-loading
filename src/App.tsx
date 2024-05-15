import "./App.css";
import { HeroButton } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Working to create Hero button</h1>
      <HeroButton className="bg-red-400" variant="default" size="lg">Here Button</HeroButton>
    </div>
  );
}

export default App;
