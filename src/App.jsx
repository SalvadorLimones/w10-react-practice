const carName = "Opel";
const carNumber = 125;
const isCar = true;
const cars = ["Opel", "BMW", 12, "Volvo", false];
const man = {
  firstName: "Joe",
  lastName: "Smith"
};
const nullVariable = null;
const udVariable = undefined;
const myF = () => "Hello";

const carList = [
  {carName: "Opel", doorNumber: 4},
  {carName: "Skoda", doorNumber: 4},
  {carName: "Mercedes", doorNumber: 4},
  {carName: "BMW", doorNumber: 5},
  {carName: "Trabant", doorNumber:4}
]

const newArray = carList.map( (c) => (
    <div key={c.carName} className="carBrand">
      <p>Márka:</p>
      <p><em>{c.carName}</em></p>
      <p>Ajtók száma: {c.doorNumber}</p>
    </div>
  )
)
console.log(newArray);

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <p className="par">Ez egy szöveg</p>
      <p>{cars}</p>
      <p>{man.firstName}</p>
      <p>{nullVariable} {udVariable}</p>
      {myF()}
      <div id="egyedi">Ebben a garázsban {carNumber} {carName} van: {isCar}</div>
      <input type="password" placeholder="minta.jozsi@gmail.com"/>
      <div className="carBrand">
        <p>Márka:</p>
        <p><em>Opel</em></p>
        <p>Ajtók száma: 4</p>
      </div>
      <div className="carBrand">
        <p>Márka:</p>
        <p><em>Volvo</em></p>
        <p>Ajtók száma: 5</p>
      </div>
      <div className="carBrand">
        <p>Márka:</p>
        <p><em>Trabant</em></p>
        <p>Ajtók száma: 4</p>
      </div>
      <div className="carBrand">
        <p>Márka:</p>
        <p><em>Skoda</em></p>
        <p>Ajtók száma: 4</p>
      </div>

      {
        carList.map ( (c) => (
          <div key={c.carName} className={c.doorNumber === 5 ? "carBrand1" : "carBrand2"}>
            <p>Márka:</p>
            <p><em>{c.carName}</em></p>
            <p>Ajtók száma: {c.doorNumber < 5 ? c.doorNumber : "Not valid"}</p>
          </div>
        ))
      };
    </div>
  );
}

export default App;
