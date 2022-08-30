import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Container>
        <Home/>
      </Container>
    </div>
  );
}

export default App;
