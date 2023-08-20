import React from "react";

export default function GlassIcon({ GlassIcon }) {
  if (!GlassIcon) {
    return null;
  }
  return (
    <>
      <div style={{ position: "absolute", top: 210, left: 189 }}>
        <img src={GlassIcon.url} alt="" height="50px" width="150px" />
      </div>
      <div style={{ position: "absolute", top: 358, left: 120, width:286}}>
        <div className="bg-success opacity-75"  >
          <h3 className="text-warning">{GlassIcon.name}</h3>
          <p className="text-white">{GlassIcon.desc}</p>
        </div>
      </div>
    </>
  );
}
