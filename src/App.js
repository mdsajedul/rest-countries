
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Countries></Countries>
    </div>
  );
}














/*
function Countries(){
  const [countries,setCountries] = useState([]);
  useEffect(()=>{
   
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return(
    <div>
      <h2>Traveling around in the world</h2>
      {
        countries.map(country=> <Country name={country.name} capital={country.capital}></Country> )
      }
    </div>
  )
}

function Country(props){
  return (
    <div>
      <h2>Name :{props.name}</h2>
      <p>Capital : {props.capital}</p>
    </div>
  )
}
*/
export default App;
