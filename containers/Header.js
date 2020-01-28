import { connect } from 'react-redux';
import Header from '../components/Header';

export default connect(state => {
  return {login: state.login};
})(Header);
