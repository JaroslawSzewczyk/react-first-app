import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }

    static protoTypes = {
        title: PropTypes.string,
    }
    render() {
        // console.log('cards',this.state.cards);
        // console.log(this.state.cards.map(card => {
        //     console.log('card.key', card.key);
        // }));
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.title}</h3>
                {this.state.cards.map(({key, ...cardProps}) => (
                    <Card key={key} {...cardProps} />
                ))}
            </section>
        )
    }
}

export default Column;
