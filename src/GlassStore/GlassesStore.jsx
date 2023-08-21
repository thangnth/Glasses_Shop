import React, { useState } from "react";

export default function GlassesStore() {
  const [icon, setIcon] = useState("./img/g1.jpg");
  const handleSetIcon = (icon) => {
    switch (icon) {
      case "g1":
        setIcon("./img/g1.jpg");
        break;
      case "g2":
        setIcon("./img/g2.jpg");
        break;
      case "g3":
        setIcon("./img/g3.jpg");
        break;
      case "g4":
        setIcon("./img/g4.jpg");
        break;
      case "g5":
        setIcon("./img/g5.jpg");
        break;
      case "g6":
        setIcon("./img/g6.jpg");
        break;
      case "g7":
        setIcon("./img/g7.jpg");
        break;
      case "g8":
        setIcon("./img/g8.jpg");
        break;
      case "g9":
        setIcon("./img/g9.jpg");
        break;
      default:
        break;
    }
  };
  return (
    <div className="cover">
      <div className="model"></div>
      <img className="icon" src={icon} alt={icon} />
      <div className="type-container">
        <img
          className="col-md-2"
          src="./img/v1.png"
          alt="v1"
          onClick={() => {
            handleSetIcon("g1");
          }}
        />
        <img
          className="col-md-2"
          src="./img/v2.png"
          alt="v2"
          onClick={() => {
            handleSetIcon("g2");
          }}
        />
        <img
          className="col-md-2"
          src="./img/v3.png"
          alt="v3"
          onClick={() => {
            handleSetIcon("g3");
          }}
        />
        <img
          className="col-md-2"
          src="./img/v4.png"
          alt="v4"
          onClick={() => {
            handleSetIcon("g4");
          }}
        />
        <img
          className="col-md-2"
          src="./img/v5.png"
          alt="v5"
          onClick={() => {
            handleSetIcon("g5");
          }}
        />
        <img
          className="col-md-2"
          src="./img/v6.png"
          alt="v6"
          onClick={() => {
            handleSetIcon("g6");
          }}
        />
        <img
          className="col-md-2"
          src="./img/v7.png"
          alt="v7"
          onClick={() => {
            handleSetIcon("g7");
          }}
        />
        <img
          className="col-md-2"
          src="./img/v8.png"
          alt="v8"
          onClick={() => {
            handleSetIcon("g8");
          }}
        />
        <img
          className="col-md-2"
          src="./img/v9.png"
          alt="v9"
          onClick={() => {
            handleSetIcon("g9");
          }}
        />
      </div>
    </div>
  );
}
