import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { heroContents } from '../../data/dataStore';

class Faq extends React.Component {

  static propTypes = {
    titleText: PropTypes.node.isRequired,
    image: PropTypes.string,
  }

  render() {
    
    return (
      <Container>
        <Hero titleText={heroContents.title} image={heroContents.image}/>
        <p>{heroContents.text}</p>
      </Container>      
    );
  }
}

export default Faq;