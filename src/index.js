import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
  return (
    <h1>My todo list</h1>
  );
};

const SearchPanel = () => {
  return (
    <input type="text" placeholder="search" / >
  );
};

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build awesome App</li>
  </ul>
  );
};

const el = (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
);

ReactDOM.render(el, document.getElementById('root'));
