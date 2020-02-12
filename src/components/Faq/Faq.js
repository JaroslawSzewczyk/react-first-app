import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { heroContents } from '../../data/dataStore';

class Faq extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
  }

  render() {
    
    return (
      <Container>
        <Hero title={heroContents.title} img={heroContents.image}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Container>      
    );
  }
}

export default Faq;