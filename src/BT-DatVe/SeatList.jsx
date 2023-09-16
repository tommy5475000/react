import React from "react";
import SeatItem from "./SeatItem";

export default function SeatList({ seats }) {
  console.log(seats);
  return (
    <table>
      <tbody>
        {seats.map((seat) => {
          if (seat.hang === "/") {
            return (
              <tr className="text-danger fs-3" style={{ alignItems: "center" }}>
                <td>
                  <span></span>
                </td>
                {seat.danhSachGhe.map((item) => (
                  <td>
                    <span
                      className="d-inline-block"
                      style={{ width: "50px", textAlign: "center" }}
                    >
                      {item.soGhe}
                    </span>
                  </td>
                ))}
              </tr>
            );
          }
          return (
            <tr style={{ alignItems: "center" }} className="text-danger fs-4 ">
              <td>{seat.hang}</td>

              {seat.danhSachGhe.map((soghe) => {
                return (
                  <td>
                    <button
                      className="btn btn-primary m-1 p-2"
                      style={{ width: "50px", textAlign: "center" }}
                    >
                      {soghe.soGhe}
                    </button>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
