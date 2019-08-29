import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Preloader from '../layout/Preloader';

import LogItem from './LogItem';

import { connect } from 'react-redux';
import { getLogs } from '../../redux/actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

const mapDispatchToProps = {
  getLogs
};

// export default connect(
//   mapStateToProps,
//   { getLogs }
// )(Logs);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logs);
