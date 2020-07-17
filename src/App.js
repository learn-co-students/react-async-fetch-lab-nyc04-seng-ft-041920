// create your App component here
import React from 'react';

class App extends React.Component {

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(r => r.json())
      .then(r => console.log(r.people))
  }

  render(){
    return(
      <div>App</div>
    )
  }
}

export default App