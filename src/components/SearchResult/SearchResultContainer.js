import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
} from '../../redux/searchStringRedux';

import { getCardsFiltered } from '../../redux/cardsRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
  cards: getCardsFiltered(state),
});

export default connect(mapStateToProps)(SearchResult);