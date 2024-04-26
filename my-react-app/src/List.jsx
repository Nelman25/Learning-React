
function List() {

    const fruits = [
        {id: 1, name: "apple",calories: 95},
        {id: 2, name: "pineapple",calories: 45},
        {id: 3, name: "banana",calories: 105},
        {id: 4, name: "coconut",calories: 159},
        {id: 5, name: "orange",calories: 37}
    ];

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) REVERSE 
    // fruits.sort((a,b) => a.calories - b.calories); NUMERIC
    // fruits.sort((a,b) => b.calories - a.calories); REVERSED NUMERIC
    

    const listItems = fruits.map(fruits => <li key={fruits.id}>{fruits.name}: &nbsp; <b>{fruits.calories}</b></li>)
    return(<ol>{listItems}</ol>);
}

export default List