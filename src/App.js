
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUser from './components/TablePost';

function App() {
  return (
    <div >
      <Header />
      <Container>
        <TableUser />
      </Container>
    </div>
  );
}

export default App;
