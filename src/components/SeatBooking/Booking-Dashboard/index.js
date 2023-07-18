/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import ConfirmBooking from "./ConfirmBooking";
import steeringImg from "../images/steering.png"
import "./Seat.css";

function SeatBooking() {
  const [Seats, setSeats] = useState([]);
  const [errmsg, setErrmsg] = useState({ errclk1: false, bookmsg: false });

  useEffect(() => {
    const retriveProducts = JSON.parse(localStorage.getItem("Total-Seats"));
    if (retriveProducts) setSeats(retriveProducts);
  }, []);

  const handleclick = (e, selectedColor) => {
    let valData = Seats.map((obj) =>
      obj.id === e.id && obj.bcolor === "white"
        ? {
            ...obj,
            bcolor: selectedColor,
            selected: "true",
          }
        : obj.id === e.id && obj.bcolor === "#228B22"
        ? {
            ...obj,
            bcolor: "white",
            selected: "false",
          }
        : obj
    );
    console.log(valData);
    setSeats(valData);
  };

  const bookclick = () => {
    let bookingDatas = {};
    let confirmTkt = [];
    Seats.forEach((data) => {
      bookingDatas[data.selected] = bookingDatas[data.selected] + 1 || 1;
    });

    if (Object.keys(bookingDatas).includes("true")) {
      confirmTkt = Seats.map((obj) =>
        obj.selected === "true"
          ? {
              ...obj,
              selected: "confirmed",
              status: "booked",
              bcolor: "#E74C3C",
              color: "white",
            }
          : obj
      );
      setErrmsg((prevState) => ({
        ...prevState,
        errclk1: false,
        bookmsg: true,
      }));
    } else {
      confirmTkt = Seats.map((obj) => obj);
      setErrmsg((prevState) => ({
        ...prevState,
        errclk1: true,
        bookmsg: false,
      }));
    }
    console.log("book", confirmTkt);
    //localStorage.setItem("Total-Seats", JSON.stringify(confirmTkt));
  };

  const closebtn = (val) => {
    setErrmsg((prevState) => ({
      ...prevState,
      bookmsg: val,
    }));
  };

  return (
    <div className="container">
      <div
        style={{
          color: "#EE4B2B",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {errmsg.errclk1 ? <p>Please Select Seats</p> : null}
      </div>
      <div
        style={{ color: "#008000", fontWeight: "bold", fontSize: "20px" }}
      ></div>

      <div className="seat_Block">
        <div className="Seat_structure">
          <div className="lower_Block">
            <p>
              Lower Deck <img src={steeringImg} alt="steering img" />
            </p>
            {Seats.slice(0, 15).map((item, key) => {
              return (
                <div
                  key={key}
                  className="Seats"
                  style={{
                    background: item.bcolor,
                    pointerEvents: item.status === "booked" ? "none" : null,
                    color: item.color,
                  }}
                  onClick={(e) => handleclick(item, "#228B22")}
                >
                  <div>{item.seatno}</div>
                </div>
              );
            })}
          </div>
          <div className="upper_Block">
            <p>
              Upper Deck <img src={steeringImg} alt="Logo" />
            </p>
            {Seats.slice(15, 30).map((item, key) => {
              return (
                <div
                  key={key}
                  className="Seats"
                  style={{
                    background: item.bcolor,
                    pointerEvents: item.status === "booked" ? "none" : null,
                    color: item.color,
                  }}
                  onClick={(e) => handleclick(item, "#228B22")}
                >
                  <div>{item.seatno}</div>
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button
              className="btn btn-danger me-2"
              onClick={(e) => bookclick()}
            >
              Book
            </button>
          </div>
          <div>
            {errmsg.bookmsg ? <ConfirmBooking closebtn={closebtn} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatBooking;
