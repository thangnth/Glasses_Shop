import React, { useState } from "react";

export default function CarStore() {
  //Hình chiếc xe thay đổi tức là thay đổi đường dẫn url của hình ảnh, ta set giá trị ban đầu là hình chiếc xe màu đen
  const [imgUrl, setImgUrl] = useState("./img/black-car.jpg");
  const handleSetImgUrl = (icon) => {
    switch (icon) {
      case "black":
        setImgUrl("./img/black-car.jpg");
        break;
      case "steel":
        setImgUrl("./img/steel-car.jpg");
        break;
      case "silver":
        setImgUrl("./img/silver-car.jpg");
        break;
      case "red":
        setImgUrl("./img/red-car.jpg");
        break;
      default:
        break;
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <img src={imgUrl} alt="car" width="100%" />
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Colors</div>
            <div className="card-body p-md-3">
              {/* <div className="d-flex"> */}
              {/* Icon black */}
              <div
                className="d-flex col-md-12 pb-md-3"
                onClick={() => {
                  handleSetImgUrl("black");
                }}
              >
                <img src="./img/icon-black.jpg" alt="Icon" width="80px" />
                <div>
                  <h6>Crystal Black</h6>
                  <p>Black</p>
                </div>
              </div>
              {/* Icon Steel */}
              <div
                className="d-flex col-md-12 pb-md-3"
                onClick={() => {
                  handleSetImgUrl("steel");
                }}
              >
                <img src="./img/icon-silver.jpg" alt="Icon" width="80px" />
                <div>
                  <h6>Modern Steel</h6>
                  <p>Metallic</p>
                </div>
              </div>
              {/* Icon silve */}
              <div
                className="d-flex col-md-12 pb-md-3"
                onClick={() => {
                  handleSetImgUrl("silver");
                }}
              >
                <img src="./img/icon-silver.jpg" alt="Icon" width="80px" />
                <div>
                  <h6>Lunar Silve</h6>
                  <p>Metallic</p>
                </div>
              </div>
              {/* Icon Red */}
              <div
                className="d-flex col-md-12 pb-md-3"
                onClick={() => {
                  handleSetImgUrl("red");
                }}
              >
                <img src="./img/icon-red.jpg" alt="Icon" width="80px" />
                <div>
                  <h6>Lunar Silve</h6>
                  <p>Metallic</p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
