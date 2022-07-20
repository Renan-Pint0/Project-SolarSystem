import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const displayMissions = missions.map((m, i) => {
      const mN = m.name;
      const mY = m.year;
      const mC = m.country;
      const mD = m.destination;
      return (
        <MissionCard
          key={ i }
          name={ mN }
          year={ mY }
          country={ mC }
          destination={ mD }
        />
      );
    });
    return (
      <div data-testid="missions">
        <p><Title headline="Missões" /></p>
        <p>{displayMissions}</p>
      </div>
    );
  }
}

export default Missions;
