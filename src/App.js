import { Custom } from './components/Custom';
import Header from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Custom />
      </Main>

    </>
  );
}

export default App;
