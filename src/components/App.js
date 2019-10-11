import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Practice1 from './function_component/Practice1'
import Practice2 from './class_component/Practice2'
import Practice3 from './form_and_ajax/Practice3'
import Practice4 from './react_redux/Practice4'
import Header from './Header'

const App = ({store}) => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Practice1} />
          <Route path="/function_component" component={Practice1} />
          <Route path="/class_component" component={Practice2} />
          <Route path="/form_and_ajax" component={Practice3} />
          <Route path="/react_redux" component={Practice4} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;