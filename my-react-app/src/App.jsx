// props = read only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

// propTypes = a mechanism that ensures that the passed value is of the 
//            correct data type
//            age = PropTypes.number

// defaultProps = a default value for props incase they are not 
//                passed from the parent component
//                name: "Guest"

import Student from "./Student.jsx";
import PropTypes from 'prop-types';

function App() {
  return (
  <>
    <Student name="Dharilyn Taladro" age={19} isStudent={true}/>
    <Student name="Jonel Villaver"  age={19} isStudent={true}/>
    <Student name="BongBong Marcos" age={99} isStudent={true}/>
    <Student />
  </>
  );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
} 
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
}

export default App;
