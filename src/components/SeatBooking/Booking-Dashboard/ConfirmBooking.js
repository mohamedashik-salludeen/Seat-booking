/* eslint-disable array-callback-return */
import React from "react";
import closeImg from "../images/close.jpg";

function ConfirmBooking({ closebtn }) {
  const popcloseclk = () => {
    closebtn(false);
  };

  return (
    <div className="container booking-Popup">
      <div className="cbook-head">
        <span>Confirm Booking</span>
        <img src={closeImg} alt="close" onClick={(e) => popcloseclk()} />
      </div>

      <div className="position-relative booking-block">
        <div>
          <p>Hi XXYYZZ,</p>
          <p>No of seats booked:</p>
          <p>From: To:</p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBooking;
