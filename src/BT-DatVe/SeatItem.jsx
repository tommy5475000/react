import React from "react";

export default function SeatItem({ seats }) {
  return seats.map((item)=>{
    return item.danhSachGhe.map((soghe)=>{
      return <button className="btn">{soghe.soGhe}</button>
    })

    })

}