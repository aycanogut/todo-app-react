import Normalize from "react-normalize";

import { GlobalStyles } from "./components/globalStyles";

import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <div className="App">
      <Normalize />
      <GlobalStyles />
      <Wrapper />
    </div>
  );
}

export default App;
