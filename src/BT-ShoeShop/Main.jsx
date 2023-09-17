import React from "react";
import data from "./danhSachGhe.json";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import { useSelector } from "react-redux";

export default function Main() {
  const { totalPrice } = useSelector((state) => {
    return state.ticket;
  });
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
              <div>
                <ul className="mt-2">
                  <li
                    style={{
                      textAlign: "left",
                      color: "white",
                      display: "inline-block",
                    }}
                    className="me-5"
                  >
                    <img
                      style={{
                        height: "15px",
                        width: "15px",
                        marginRight:"5px",
                        verticalAlign:".1px",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zIYlwKXtRLMAtDXTzcIbgEoN2SCXZH_kT_1KLuqBm3QdBw_9ZmmbVcuam6bsIOs_tes&usqp=CAU"
                      alt=""
                    />
                    Ghế đang chọn
                  </li>
                  <li
                    style={{
                      textAlign: "left",
                      
                      color: "white",
                      display: "inline-block",
                    }}
                    className="me-5"
                  >
                    <img
                      style={{
                        height: "15px",
                        width: "15px",
                        marginRight:"5px",
                        verticalAlign:".1px",
                      }}
                      src="https://e7.pngegg.com/pngimages/329/173/png-clipart-red-computer-icons-square-s-angle-color-thumbnail.png"
                      alt=""
                    />
                    Ghế đã đặt
                  </li>
                  <li
                    style={{
                      textAlign: "left",
                      color: "white",
                      display: "inline-block",
                      }}
                    className="me-5"
                  >
                      <img
                        style={{
                          height: "15px",
                          width: "15px",
                          marginRight:"5px",
                          verticalAlign:".1px",
                        }}
                        src="https://printgo.vn/uploads/media/792227/cac-loai-mau-xanh-2_1624333127.jpg"
                        alt=""
                      />
                    Ghế đang trống
                  </li>
                </ul>

                <div>
                  <SeatList seats={data} />
                </div>
                <button className="btn btn-dark mt-3" onClick={handleBook}>
                  Đặt Vé
                </button>

                <div>
                  <Tickets />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
