import React from "react";
import data from "./danhSachGhe.json";
import SeatList from "./SeatList";

export default function Main() {
  const handleGet = () => {
    alert("Vui lòng điền thông tin");
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
          height: "150vh",
        }}
      >
        <h1 className="text-center text-white py-5">MOVIE SEAT SELECTION</h1>
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
              <h5 className="text-warning my-5">
                Fill The Required Details Below And Select Your Seats
              </h5>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="name" className="fs-6 fw-bold text-white">
                    Name
                  </label>
                  <span className="text-danger"> * </span>
                  <input type="text" />
                </div>

                <div className="col-md-6 text-right">
                  <label htmlFor="name" className="fs-6 fw-bold text-white">
                    Number of Seats
                  </label>
                  <span className="text-danger"> * </span>
                  <input type="number" />
                </div>

                <button className="btn btn-light w-25 mt-3" onClick={handleGet}>
                  Start Selecting
                </button>

                <ul style={{ listStyle: "none" }} className="mt-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
