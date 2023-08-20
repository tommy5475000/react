import React, { useState } from "react";
import data from "./dataGlasses.json";
import GlassIcon from "./GlassIcon";
import GlassList from "./GlassList";

export default function GlassesApp() {
  const [imgUrl, setImgUrl] = useState(null);

  const handleChangeGlass = (GlassIcon) => {
    // console.log(GlassIcon);
    setImgUrl(GlassIcon);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="text-center text-white bg-dark opacity-25 py-3">
          <h3>TRY GLASSES APP ONLINE</h3>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  src="./glassesImage/model.jpg"
                  alt="model"
                  height="350px"
                />
                    <GlassIcon GlassIcon={imgUrl}/>
              </div>
            </div>
            <div className="col-md-6">
              <img src="./glassesImage/model.jpg" alt="model" height="350px" />
            </div>
          </div>

          <div className="GlassIcon mt-5 row">
            <GlassList GlassIcons={data} onChangeGlass={handleChangeGlass} />
          </div>
        </div>
      </div>
    </>
  );
}
