import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars(c => c.filter((_,i) => i!==index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h1>List of Car Objects</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model} </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input type="text" value={carMake} onChange={handleMakeChange} />
      <br />
      <input type="text" value={carModel} onChange={handleModelChange} />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
export default MyComponent;
