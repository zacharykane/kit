import { connect } from 'react-redux';

import Overview from '../views/Overview';

const mapStateToProps = state => ({
    name: state.name,
});

export default connect(mapStateToProps)(Overview);
