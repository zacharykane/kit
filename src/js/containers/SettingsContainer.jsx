import { connect } from 'react-redux';
import { updateName } from '../store/actions';

import Settings from '../views/Settings';

const mapStateToProps = state => ({
    name: state.name,
});

const mapDispatchToProps = dispatch => ({
    changeName: newName => dispatch(updateName(newName)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Settings);
