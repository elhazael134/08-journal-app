import React from 'react';
import ReactDOM from 'react-dom';
import JournalApp from './JournalApp';
import './styles/styles.scss';

const container = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <JournalApp/>
  </React.Fragment>,
  container
);