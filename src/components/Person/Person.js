import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Person({ findPerson }) {
  const [person, setPerson] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    setPerson(findPerson(id));
  }, [findPerson, id]);

  return (
    <div>
      <p>The details about Person {id}</p>
      <p>Name: {person && person.name}</p>
      <p>DOB: {person && person.birth_year}</p>
      <p>Homeworld: {person && person.homeworld}</p>
    </div>
  );
}
