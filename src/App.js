import './App.css';
import countriesData from "./data/countries.json"

function App() {
  // console.log(`countriesData: ${countriesData}`);
  // console.log(`countriesData length: ${Object.keys(countriesData).length}`);
  const countryCodes = Object.keys(countriesData);

  const countries = {
    "UY": {
      "name": "Uruguay",
      "neighbors": ["BR", "AR"],
      "fill-color": ""
    },
    "CO": {
      "name": "Colombia",
      "neighbors": ["BR", "VE", "EC", "PE"],
      "fill-color": ""
    },
    "VE": {
      "name": "Venezuala",
      "neighbors": ["BR", "CO", "GY"],
      "fill-color": ""
    },
    "GY": {
      "name": "Guyana",
      "neighbors": ["VE", "BR", "SR"],
      "fill-color": ""
    },
    "SR": {
      "name": "Suriname",
      "neighbors": ["BR", "GY"],
      "fill-color": ""
    },
    "BR": {
      "name": "Brazil",
      "neighbors": ["UY", "AR", "PY", "BO", "PE", "CO", "VE", "GY", "SR"],
      "fill-color": ""
    },
    "EC": {
      "name": "Ecuador",
      "neighbors": ["PE", "CO"],
      "fill-color": ""
    },
    "PE": {
      "name": "Peru",
      "neighbors": ["EC", "BO", "CO", "BR", "CL"],
      "fill-color": ""
    },
    "BO": {
      "name": "Bolivia",
      "neighbors": ["BR", "PE", "PY", "AR", "CL"],
      "fill-color": ""
    },
    "PY": {
      "name": "Paraguay",
      "neighbors": ["BO", "BR", "AR"],
      "fill-color": ""
    },
    "CL": {
      "name": "Chile",
      "neighbors": ["PE", "BO", "AR"],
      "fill-color": ""
    },
    "AR": {
      "name": "Argentina",
      "neighbors": ["CL", "BO", "PY", "BR", "UY"],
      "fill-color": ""
    },
  }
  const saCodes = Object.keys(countries)
  // console.log(saCodes)
  const chooseRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * 12);
    return saCodes[randomIndex];
  }

  const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };
  const gameOrder = [];
  const visited = new Set();
  const queue = [chooseRandomCountry()]
  // console.log(queue)

  while (queue.length > 0) {
    const current = queue.shift();
    if (!visited.has(current)) {
      visited.add(current)
      gameOrder.push(current)
      const neighbors = shuffleArray(countries[current]["neighbors"]);
      neighbors
        .filter((n) => !visited.has(n))
        .forEach(n => queue.push(n));
    }
  }
  console.log(`gameOrder: ${gameOrder}`)
  // console.log(countries)
  console.log("end")
  // console.log(`gameOrder length: ${gameOrder.length}, visited length: ${visited.size()}`)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
