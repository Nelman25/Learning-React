// Conditional rendering = allows you to control what gets rendered
//            in you application based on certain conditions
//            ( show, hide, or change components)

import UserGreeting from './UserGreeting.jsx';

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Nelman" />
    </>
  );
}

export default App;
