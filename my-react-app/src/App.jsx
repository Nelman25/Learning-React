import List from './List.jsx'
function App() {

  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Pineapple", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 },
    { id: 5, name: "Orange", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "Celery", calories: 16 },
    { id: 7, name: "Cucumber", calories: 16 },
    { id: 8, name: "Mushrooms", calories: 46 },
    { id: 9, name: "Spinach", calories: 7 },
    { id: 10, name: "Bell pepper", calories: 40 },
  ];

  return(
    <>
    <List items ={fruits} category="Fruits"/>
    <List items ={vegetables} category="Vegetables"/>
    </>
  );
}

export default App