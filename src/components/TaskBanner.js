import React from "react";

const TaskBanner = (props) => {
  return (
    <h4 className="bg-primary text-white text-center p-4">
      {props.userName}Task App ({props.taskItems.filter((t) => !t.done).length}{" "}
      tasks to do)
    </h4>
  );
};

export default TaskBanner;
