import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Cards from './components/Cards';
import AddPerson from './components/AddPerson';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
function App() {
  function joinIn(){

  }
  return (
    <div className='d-flex flex-column main-container align-items-center  '>
     <Navbar />
     <Main />
     <Cards />
     <AddPerson />
     <Testimonials />
     <Footer />
    </div>
  );
}

export default App;
