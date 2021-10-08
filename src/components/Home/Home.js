import PropTypes from 'prop-types';
//used to be part of react... now its own module

export default function Home(props) {
  return (
    <div className="home">
      <p>This is the home page.</p>
      <p>
        The REQUIRED props isAlive and anything are being passed to this
        component. In App.js you can remove these to see the generated errors.
      </p>
    </div>
  );
}

//add PropTypes
Home.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  findPlanet: PropTypes.func,
  isAlive: PropTypes.bool.isRequired,
  anything: PropTypes.any.isRequired,
  myobj: PropTypes.shape({
    email: PropTypes.string,
    age: PropTypes.number,
  }),
  greet: PropTypes.oneOf(['hello', 'goodbye']),
  something: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
