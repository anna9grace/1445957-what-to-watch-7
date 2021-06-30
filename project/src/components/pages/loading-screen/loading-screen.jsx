import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import {connect} from 'react-redux';

import './loading-screen.css';
import 'react-toastify/dist/ReactToastify.css';

function LoadingScreen(props) {
  const {dataError} = props;

  useEffect(() => {
    if (dataError) {
      toast(dataError);
    }
  }, [dataError]);

  return (
    <div className='loader'>
      <ToastContainer
        autoClose={false}
        closeButton={false}
      />
      <div className='loader__spinner'>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}


LoadingScreen.propTypes = {
  dataError: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  dataError: state.dataError,
});


export {LoadingScreen};
export default connect(mapStateToProps, null)(LoadingScreen);
