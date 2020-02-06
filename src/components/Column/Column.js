/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
// import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  // state = {
  //   cards: this.props.cards || [],
  // }

    static protoTypes = {
      title: PropTypes.string,
    }

    // addCard(title) {
    //   this.setState(state => (
    //     {
    //       cards: [
    //         ...state.cards,
    //         {
    //           key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
    //           title,
    //         },
    //       ],
    //     }
    //   ));
    // }
    render() {
      const { title, icon, cards } = this.props;
      return (
        <section className={styles.component}>
          <h3 className={title}>{title}
            <span className={icon}>
              <Icon name={icon} />
            </span>
          </h3>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}

          {/*<div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
          </div> */}
        </section>
      );
    }
}

export default Column;
