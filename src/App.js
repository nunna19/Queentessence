import React, { Component } from 'react';
import logo from './logo.svg';
import './css/style.scss';

class App extends Component {

  state ={
    flip:false
  }

flip = () => { 
  this.setState({
    flip : !this.state.flip
  })
}

toFront = () => {
  this.setState({flip:false})
}
  render() {
    return (
      <div className="App">
      <div className="grid-container">
          <div className="grid-Header">

          </div>

          <div className="grid-Main">
            <div className={this.state.flip ? "flip-container front" : "flip-container"} onClick={this.flip} >
              <div className="flipper">
                <div className= "card tile-front">
                  <div className="bg-tile">
                    <i className="material-icons m_emote">account_box</i>
                  </div>
                  <div className="card-body">
                    <p>5 Users</p>
                  </div>
                  <div className="card-footer text-muted m_desc">
                      Online
                  </div>
                </div>

                  <div className="card tile-back" onMouseLeave={this.toFront}>
                    <div class="card-body">
                      <p>User online correspond to people connected on your network</p>
                    </div>
                  </div>

              </div>
            </div>
          </div>

          <div className="grid-Header">
              Header
          </div>

         <div className="grid-Right">
              right
          </div>

          <div className="grid-Menu">
              menu
          </div>

          <div className="grid-Footer">
              footer
          </div>

          <div className="colum1">
              colum1
              </div>
              <div className="colum2">
                colum2
              </div>
              <div className="colum3">
                colum3
              </div>
       </div>
      </div>
    );
  }
}

export default App;


// {this.state.flip ? "flip-container front" : "flip-container"} 