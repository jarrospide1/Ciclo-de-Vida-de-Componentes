
import '../app2.css';
import react, { Component } from 'react'

import NavBar from './NavBar'
import TitleBoxes from './TitleBoxes'
import Body from './Body'

class App extends Component {
  
  mostrarGifData() {
    document.querySelector('.btn-success')
  }

  componentDidUpdate () {
    console.log('me actualice');
    this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=1g1N2psDgipMjkJqmw5GfXpIEJcxYiUv&tag=&rating=g', this.mostrarGifData)

}
  
  render () {
    console.log('me renderize');

    return (

      <div className="App">
        
        <NavBar />
          <div className="container">
            <TitleBoxes />
          </div>
            
      </div>
    )
  }
}

export default App;
