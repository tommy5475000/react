import React from "react";

export default function Item() {
  return (
    <>
      <div className="card bg-white border-0 h-100">
        <div className="card-body text-center p-lg-4 pt-0 pt-lg-0">
          <div className="bg-dark-subtle text-center p-5 mb-2">500 x 325</div>
          <h2 className="fs-4 fw-bold">Fresh new layout</h2>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque architecto officiis eos numquam dignissimos quod maiores excepturi totam unde!
          </p>
          <div className="bg-body-secondary mt-4">
            <a className="btn btn-primary my-3" href="#!">
              Call to action
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
