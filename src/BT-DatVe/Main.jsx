import React from "react";
import data from "./danhSachGhe.json";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import {useSelector} from "react-redux"

export default function Main() {
  const{totalPrice}=useSelector((state)=>{
    return state.ticket
  })
  const handleBook = () => {
    alert(`Tổng tiền của bạn: ${totalPrice}VND`);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url(./img/bgmovie.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "auto",
        }}
      >
        <h1 className="text-center text-white py-3">MOVIE SEAT SELECTION</h1>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "800px",
              height: "100%",
              background: "rgba(128, 128, 128, 0.34)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="inputForm" style={{ width: "90%" }}>
              <h5 className="text-warning my-3">
                Fill The Required Details Below And Select Your Seats
              </h5>
              <div >
                <ul style={{ listStyle: "none" }} className="mt-2">
                  <li
                    style={{
                      textAlign: "left",
                      marginRight: "16px",
                      color: "white",
                      display: "inline-block",
                    }}
                    className="me-5"
                  >
                    Selected Seat
                  </li>
                  <li
                    style={{
                      textAlign: "left",
                      marginRight: "16px",
                      color: "white",
                      display: "inline-block",
                    }}
                    className="me-5"
                  >
                    Reserved Seat
                  </li>
                  <li
                    style={{
                      textAlign: "left",
                      marginRight: "16px",
                      color: "white",
                      display: "inline-block",
                      //   ':before':{
                      //     content: "",
                      //     width: "15px",
                      //     height: "15px",
                      //     display: "inline-block",
                      //     marginRight: "10px",
                      //   }
                    }}
                    className="me-5"
                  >
                    Empty Seat
                  </li>
                </ul>

                <div>
                  <SeatList seats={data} />
                </div>
                <button className="btn btn-dark mt-3" onClick={handleBook}>Đặt Vé</button>

                <div><Tickets/></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
