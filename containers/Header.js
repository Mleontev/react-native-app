import { connect } from 'react-redux';
import Header from '../components/Header';

export default connect(state => {
  console.log('header state', state);
  return {login: state.login};
})(Header);
