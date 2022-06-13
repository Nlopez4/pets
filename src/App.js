import './styles/App.scss';
import Search from './components/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="pet-heading">Avaliable Pets</h1>
      <Search />
    </div>
  );
}

export default App;
