import React, prop  from 'react';
import { Router } from 'react-router';

class App extends React.Component {
  static contextTypes = {
    router: prop.object
  }

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }
  static prop = {
    history: prop.object.isRequired,
    routes: prop.element.isRequired
  };


  render () {
     return (
       <div style={{ height: auto }}>
         {this.content}
       </div>
     )
   }
}
export default App;
