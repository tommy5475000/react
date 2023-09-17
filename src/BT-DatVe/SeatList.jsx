import React from "react";
import SeatItem from "./SeatItem";
import { useSelector } from "react-redux";

export default function SeatList({ seats }) {
  const { selectedSeats } = useSelector((state) => {
    return state.ticket;
  });

  return (
    <table>
      <tbody>
        {seats.map((seat) => {
          if (seat.hang === "") {
            return (
              <tr className="text-danger fs-3" style={{ alignItems: "center" }}>
                <td>
                  <span></span>
                </td>
                {seat.danhSachGhe.map((seat) => (
                  <td>
                    <span
                      className="d-inline-block"
                      style={{ width: "50px", textAlign: "center" }}
                    >
                      {seat.soGhe}
                    </span>
                  </td>
                ))}
              </tr>
            );
          }
          return (
            <tr
              style={{ alignItems: "center" }}
              className="text-danger fs-4"
              key={seat.id}
            >
              <td>{seat.hang}</td>
              {seat.danhSachGhe.map((seat) => {
                const isSelected = selectedSeats.find(
                  (item) => item.soGhe === seat.soGhe
                );
                return <SeatItem seat={seat} isSelected={!!isSelected} />;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
