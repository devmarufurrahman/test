
import './App.css';
import Card from './component/card';
import Head from './component/Head';
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
      <Head/>
    </div>
    
  );
}

export default App;
