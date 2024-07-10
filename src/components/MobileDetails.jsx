import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyMobile, sellMobile,buyMobileSuccess,sellMobileSuccess } from '../redux/actions/mobileActions';

const MobileDetails = ({ buyMobile, sellMobile, noOfMobile, buyMobileSuccess, sellMobileSuccess }) => {
  return (
    <div>
      <h1>Number Of Mobiles: {noOfMobile} </h1>
      <button onClick={() => buyMobile() }>Buy Mobile</button>
      <button onClick={() => sellMobile() }>Sell Mobile</button>
      <button onClick={() => buyMobileSuccess() }>Buy Mobile Success</button>
      <button onClick={() => sellMobileSuccess() }>Sell Mobile Success</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  noOfMobile: state.noOfMobile 
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    buyMobile,
    sellMobile,
    buyMobileSuccess,
    sellMobileSuccess
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);
