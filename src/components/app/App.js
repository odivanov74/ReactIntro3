import '../app/App.css';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import Switch from '../switch/Switch';
import Power from '../math/power/Power';
import Factorial from '../math/factorial/Factorial';
import Fibonachi1 from '../math/fibonachi1/Fibonachi1';
import Fibonachi2 from '../math/fibonachi2/Fibonachi2';
import Article from '../article/Article';
import Footer from '../footer/Footer';
import data from '../article/db.json';

function App() {

  let nav = 
  {
    "Главная"   : "/index",
    "Новости"   : "/news",
    "Магазин"   : "/shop",
    "О нас"     : "/about",
    "Контакты"  : "/contacts",
  }

  let db = data;

  return (
    <div className="App">
      <Header title="Hello React" description="This is my first React App. This phrase passed using parameters over 'PROPS'"/>
      <Nav navigation={nav}/>
      <Switch/>
      <Power a={2} n={8}/>
      <Factorial a={10}/>
      <Fibonachi1 a={7}/>
      <Fibonachi2 n={7}/>
      <Article db={db}/>  
      <Footer year="2024"/>
    </div>
  );
}

export default App;
 