import React from "react";
import Todo from "../assets/direct-hit.png";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DragArea from "./DragArea";

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {title}
      </h2>
      <DragArea />
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <>
              <TaskCard
                key={index}
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
              />
              <DragArea />
            </>
          )
      )}
    </section>
  );
};

export default TaskColumn;
