import React from "react";
import Item from "./Item";

export default function ItemList() {
  return (
    <>
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row">
            <div className="col-lg-6 col-xxl-3">
              <Item />
            </div>
            <div className="col-lg-6 col-xxl-3">
              <Item />
            </div>
            <div className="col-lg-6 col-xxl-3">
              <Item />
            </div>
            <div className="col-lg-6 col-xxl-3">
              <Item />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
