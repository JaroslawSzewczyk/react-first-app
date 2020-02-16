import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsFromList } from '../../redux/cardsRedux';
import { getSearchString, createAction_changeSearchString } from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  lists: getCardsFromList(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);