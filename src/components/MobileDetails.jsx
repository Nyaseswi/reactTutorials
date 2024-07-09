import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buyMobile, sellMobile } from '../redux/actions/mobileActions';

const MobileDetails = ({ buyMobile, sellMobile, noOfMobile }) => {
  return (
    <div>
      <h1>Number Of Mobiles: {noOfMobile} </h1>
      <button onClick={() => buyMobile() }>Buy Mobile</button>
      <button onClick={() => sellMobile() }>Sell Mobile</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  noOfMobile: state.noOfMobile 
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    buyMobile,
    sellMobile
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);
