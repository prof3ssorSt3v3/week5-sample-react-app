import { useState, useEffect } from 'react';
import Person from '../Person/Person';
import { Route, NavLink } from 'react-router-dom';
import './people.css';

export default function People(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData('people');
  }, []);

  async function fetchData(type) {
    let url = `https://swapi.dev/api/${type}`;
    let resp = await fetch(url);
    let data = await resp.json();
    setList(data.results);
  }

  function findPerson(id) {
    return list.find((item, index) => parseInt(id) === index + 1);
  }

  return (
    <div className="people">
      {list.length === 0 && <p>Loading...</p>}
      <div className="people-list">
        {list.map((item, index) => (
          <p className="person" key={item.name}>
            {item.name} <br />
            <NavLink to={`/people/${index + 1}`}>Learn More</NavLink>
          </p>
        ))}
      </div>

      <div className="person-details">
        <Route path="/people/:id">
          <Person findPerson={findPerson} />
        </Route>
      </div>
    </div>
  );
}
