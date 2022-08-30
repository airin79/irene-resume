import React, { Component, useEffect, useState } from "react";

function BestAccomplishment(props) {
  if (!props.best) return <p></p>;

  const [showBest, setShowBest] = useState(false);
  function onBestAccomplishment() {
    setShowBest(!showBest);
  }

  return (
    <div>
      <button
        className="best-button"
        onClick={onBestAccomplishment}
      >
        🏆
      </button>

      {showBest && (
        <div >
          {props.best.map((row, idx) => (
            <p
              key={idx}
              className="work-description-row"
              dangerouslySetInnerHTML={{ __html: row }}
            ></p>
          ))}
        </div>
      )}
    </div>
  );
}

export default BestAccomplishment;
