import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </>
  );
}

export default App;
