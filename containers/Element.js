import { connect } from 'react-redux';
import Element from '../components/Element';
import { signOut } from '../actions/index';

export default connect(
  state => {
    return { lists: state.lists, login: state.login };
  },
  dispatch => {
    return {
      dispatch,
      signOut,
    };
  },
)(Element);
