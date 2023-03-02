import './App.css';
import countriesData from "./data/countries.json"
// import WorldMap from "./assets/wrld-22.svg"
import WorldMap from './components/WorldMap';

function App() {
  // console.log(`countriesData: ${countriesData}`);
  // console.log(`countriesData length: ${Object.keys(countriesData).length}`);
  const countryCodes = Object.keys(countriesData);

  const chooseStartCountry = () => {
    const randomIndex = Math.floor(Math.random() * 197);
    return countryCodes[randomIndex];
  }

  const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };
  
  const setGameOrder = () => {
    const visited = new Set();
    const queue = [chooseStartCountry()]
    const gameOrder = [];

    while (queue.length > 0) {
      const current = queue.shift();
      if (!visited.has(current)) { // might not need this if statement
        visited.add(current)
        gameOrder.push(current)
        const neighbors = shuffleArray(countriesData[current]["neighbors"]);
        neighbors
          .filter(n => !visited.has(n))
          .forEach(n => queue.push(n));
      }
    }
    return gameOrder;
  }
  // const gameOrder = setGameOrder();
  // console.log(`gameOrder: ${gameOrder}`)
  // // console.log(countries)
  // console.log("end")

  return (
    <div className="App">
      <h1>Learn the World Map</h1>
      <WorldMap className="world"></WorldMap>
    </div>
  );
}

export default App;