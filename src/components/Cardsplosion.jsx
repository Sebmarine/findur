import React, { useState } from "react";
import "./Cardsplosion.css";

const Cardsplosion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const groups = [
    { index: 0, status: "active" },
    { index: 1, status: "unknown" },
    { index: 2, status: "unknown" },
  ];

  const handleLoveClick = () => {
    const nextIndex =
      activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    const currentGroup = document.querySelector(
      `[data-index="${activeIndex}"]`
    );
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      setActiveIndex(nextIndex);
    });
  };

  const handleHateClick = () => {
    const nextIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
    const currentGroup = document.querySelector(
      `[data-index="${activeIndex}"]`
    );
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";
    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      setActiveIndex(nextIndex);
    });
  };

  return (
    <>
      <div className="card-swiper-container">
        <div className="card-swiper">
          <div className="card-groups">
            <div className="card-group" data-index="0" data-status="active">
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
            </div>
            <div className="card-group" data-index="1" data-status="unknown">
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
            </div>
            <div className="card-group" data-index="2" data-status="unknown">
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
            </div>
          </div>
          <div className="card-swiper-buttons">
            <button onClick={handleHateClick} id="hate-button">
              <i className="fa-solid fa-x"></i>
            </button>
            <button onClick={handleLoveClick} id="love-button">
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardsplosion;
