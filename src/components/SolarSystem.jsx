import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planeta = planets.map((planet, i) => {
      const pName = planet.name;
      const pImg = planet.image;
      return <PlanetCard key={ i } planetName={ pName } planetImage={ pImg } />;
    });
    return (
      <div data-testid="solar-system">
        <p><Title headline="Planetas" /></p>
        <p>{planeta}</p>
      </div>
    );
  }
}
export default SolarSystem;
