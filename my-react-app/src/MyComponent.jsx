import React, {useState} from 'react';
function MyComponent() {
    const[name,setName] = useState();

    const updateName = () => {
        setName("Nelman");
    }
    
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>
        </div>
    );
}
export default MyComponent