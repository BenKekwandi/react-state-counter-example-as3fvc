import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Person extends React.Component {
  render(props) {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.surname}</h1>
        <h1>{this.props.age}</h1>
      </div>
    );
  }
}

const el = <Person name="Benoit" surname="Kekwandi" age="21" />;
ReactDOM.render(el, document.getElementById('root'));
