import React from 'react';
import './App.css';

import { Link, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'

const HatsPage = props => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
)

const TopicsList = props => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
)

const TopicDetail = props => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact={true} path='/' component={HomePage} />
      <Route exact={true} path='/topics' component={TopicsList} />
      <Route exact={true} path='/topics/:topicId' component={HatsPage} />
    </div>
  );
}

export default App;
