import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Tickets() {
  const { selectedSeats, totalPrice } = useSelector((state) => {
    return state.ticket;
  });

  const dispatch = useDispatch();
  const handleDelete = (seatId) => {
    dispatch({ type: "deleteSoghe", payload: seatId });
  };

  return (
    <>
      <table className="table table-dark table-stripe mt-3">
        <thead>
          <tr>
            <th scope="col">MÃ GHẾ</th>
            <th scope="col">GIÁ</th>
            <th scope="col">TỔNG CỘNG</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {selectedSeats.map((seat) => (
            <tr>
              <td>{seat.soGhe}</td>
              <td>{seat.gia}</td>
              <td>{totalPrice}</td>
              <td><button className="btn btn-danger" onClick={()=>handleDelete(seat.soGhe)}>X</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
