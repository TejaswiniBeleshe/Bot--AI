
import './App.css';
import BotContent from './components/BotContent/BotContent';
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App d-flex">
      <NavigationBar/>
      <div className='mainDiv'>
        <Header/>
        <BotContent/>
        <Search/>

      </div>


    </div>
  );
}
export default App;
