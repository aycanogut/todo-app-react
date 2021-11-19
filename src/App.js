import Normalize from 'react-normalize';

import { GlobalStyles } from './components/globalStyles';

import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Normalize />
      <GlobalStyles />
      <Form />
    </div>
  );
}

export default App;
