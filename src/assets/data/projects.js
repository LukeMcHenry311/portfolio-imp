import { v4 as uuidv4 } from 'uuid';

import ProjOne from '../images/projectone.png';
import ProjTwo from '../images/projecttwo.png';
import ProjThree from '../images/projectthree.png';
import ProjFour from '../images/projectfour.png';
import ProjFive from '../images/projectfive.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Coinvrt',
    desc:
      'An application to track cryptocurrency data, such as its price or how it compares to other cryptocurrencies data.',
    img: ProjOne,
    link1: 'https://github.com/LukeMcHenry311/weekly-group-project',
    link2: 'https://lukemchenry311.github.io/weekly-group-project/',
  },
  {
    id: uuidv4(),
    name: 'Hogwarts Library',
    desc:
      'A fun app to find your harry potter house, or create wizards and spells with other users.',
    img: ProjTwo,
    link1: 'https://github.com/Jsieler/wizard-sorting-quiz',
    link2: 'https://pacific-scrubland-02824.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Team-Up',
    desc:
      'Team-Up is a gaming social networking app, where you can follow your favorite games. As well as add users with similar gaming interests to team up!',
    img: ProjThree,
    link1: 'https://github.com/Jsieler/team-up',
    link2: 'https://protected-depths-21600.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      'A simple website to tell the 5-day weather forecast for any city in the world.',
    img: ProjFour,
    link1: 'https://github.com/LukeMcHenry311/Server-Side-Weather',
    link2: 'https://lukemchenry311.github.io/Server-Side-Weather/',
  },
  {
    id: uuidv4(),
    name: 'Team-Profile-Generator-Xioma',
    desc:
      'A back-end node based application to generate a team-profile dynamically with minimal input from the user.',
    img: ProjFive,
    link1: 'https://github.com/LukeMcHenry311/Team-Profile-Generator-Xioma',
    link2: 'https://github.com/LukeMcHenry311/Team-Profile-Generator-Xioma',
  },
];

export default projects;
