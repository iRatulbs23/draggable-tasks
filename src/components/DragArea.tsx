import React, { useState } from "react";
import "./DragArea.css";
const DragArea = ({ onDrop }) => {
  const [showDragArea, setShowDragArea] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDragArea(true)}
      onDragLeave={() => setShowDragArea(false)}
      onDrop={() => {
        onDrop();
        setShowDragArea(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={showDragArea ? "showDrop" : "hideDrop"}
    >
      Drop Here
    </section>
  );
};

export default DragArea;
