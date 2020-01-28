import { connect } from 'react-redux';
import Authorization from '../components/Authorization';
import { signIn } from '../actions/index';

export default connect(
  state => {
    return {login: state.login};
  },
  dispatch => {
    return {
      dispatch,
      signIn,
    };
  },
)(Authorization);
