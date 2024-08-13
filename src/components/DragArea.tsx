import React, { useState } from "react";
import "./DragArea.css";
const DragArea = () => {
  const [showDragArea, setShowDragArea] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDragArea(true)}
      onDragLeave={() => setShowDragArea(false)}
      className={showDragArea ? "showDrop" : "hideDrop"}
    >
      Drop Here
    </section>
  );
};

export default DragArea;
