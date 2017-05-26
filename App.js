import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Components/Title.js'
import Logon from './Components/Logon.js';

class App extends React.Component {
   render() {
      return (
        <div>
            <Title/>
            <Logon/>
        </div>
      );
   }
}
export default App;