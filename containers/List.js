import { connect } from 'react-redux';
import List from '../components/List';

export default connect(state => {
  return {
    lists: state.lists,
    login: state.login,
  };
})(List);
