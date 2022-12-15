
import './App.css';
import Card from './component/card';
import Footer from './component/Footer/Footer';
import Img1 from './component/NOMAN.jpg'

function App() {
  return (
    <div >
      <Card 
      h2='Alamin'
      Img={Img1}/>
      <Card 
      h2='Alamin'
      Img={Img1}/>
      <Card 
      h2='Alamin'
      Img={Img1}/>
      <Footer/>
      
    </div>
  );
}

export default App;
