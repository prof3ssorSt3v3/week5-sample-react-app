import { useParams } from 'react-router-dom';
//import { useLocation, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Planet({ findPlanet }) {
  // console.log(props.match.params.id);
  // props.location   props.history
  // props.findPlanet() - function in Planets.js to search state array
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setPlanet(findPlanet(id));
  }, [findPlanet, id]);

  return (
    <>
      <p>This is the planet details page.</p>
      <p>Id: {id}</p>
      <p>Name: {planet && planet.name}</p>
      <p>Terrain: {planet && planet.terrain}</p>
    </>
  );
}
