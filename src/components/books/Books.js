import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'



const Books = ({ match }) => {
  return (
    <div className="App">
      <h1>Books</h1>

      <Route path={`${match.path}/book1`} render={() => { return <p>The title of the first book</p> }} />
      <Route path={`${match.path}/book2`} render={() => { return <p>The title of the second book</p> }} />
      <Route path={`${match.path}/book3`} render={() => { return <p>The title of the third book</p> }} />
      <Route path={`${match.path}/:id`} component={Book} />

      <ul>
        <li>
          <Link to={`${match.url}/book1`}>Book1</Link>
        </li>
        <li>
          <Link to={`${match.url}/book2`}>Book2</Link>
        </li>
        <li>
          <Link to={`${match.url}/book3`}>Book3</Link>
        </li>
      </ul>





    </div>
  );
}


const Book = ({match}) => (
     <div>
       <h3>URL ID parameter: {match.params.id}</h3>
     </div>
  )

export default Books;
