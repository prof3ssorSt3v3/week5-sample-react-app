import { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Planet from '../Planet/Planet';
import './planets.css';

export default function Planets(props) {
  const [list, setList] = useState([]);
  //hooks return 2 things - variable, function to change the variable
  //useState - for creating and updating variables inside state
  //useEffect - for the rendering lifecycle

  async function fetchData() {
    let url = 'https://swapi.dev/api/planets';
    let resp = await fetch(url);
    let data = await resp.json();
    setList(data.results); //new array being put into `list`
    //changing a state variable tells react to look and see
    //if something needs to be re-rendered
  }

  function findPlanet(id) {
    return list.find((item, index) => parseInt(id) === index + 1);
    //return an object for the single planet
  }

  useEffect(() => {
    //all useEffect functions run on the inital render of the component
    console.log('useEffect was called.');
    fetchData();
  }, []); //here we are monitoring for changes to `name`

  return (
    <div className="planets">
      {list.length === 0 && <p>Loading...</p>}
      <div className="planet-list">
        {list.map((item, index) => (
          <p key={item.name}>
            <NavLink to={`/planets/${index + 1}`}>{item.name}</NavLink>
            <span>{item.terrain}</span>
          </p>
        ))}
      </div>

      <div className="planet-details">
        <Route path="/planets/:id">
          <Planet findPlanet={findPlanet} />
        </Route>
      </div>
    </div>
  );
}
//logical short-circuiting
// value && object
//if value is true then the object is rendered
//if value is false then the object is NOT rendered
