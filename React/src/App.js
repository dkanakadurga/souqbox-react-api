import React from 'react';
import './App.css';
import Orders from './Orders';
import Home from './Home';
import FlexDemo from './FlexDemo';

function App() {
  return (
    <div className="App">
     {/* <Orders/> */}
      <Home/>
     {/* <FlexDemo/> */}
    </div>
  );
}

export default App;

// import React, {Component} from 'react';
// import { createSwitchNavigator } from "@react-navigation/core";
// import { createBrowserApp, Link } from "@react-navigation/web";
// import { start } from "repl";

// class Home extends React.Component {
//   static path = "";
//   static navigationOptions = {
//     title: "Home",
//   };
//   render () {
//     return (
//       <div>
//         <h2>Home Screen</h2>
//         <Link toRoute="Profile" params={{ name: "Brent", view: "photos" }}>
//           Brent's photos
//         </Link>
//       </div>
//     );
//   }
// }
// class Profile extends React.Component {
//   static path = "/profile/:name";

// }

// const AppNavigator = createSwitchNavigator({
//   Home,
//   Profile,
// });

// const App = createBrowserApp(AppNavigator);

// export default App;










