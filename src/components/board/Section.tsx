import { Draggable } from "@hello-pangea/dnd";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNewTask from "../base/AddNewTask";
import Card from "../card/Card";
import ToggleButtonIcon from "../base/ToggleButtonIcon";

interface ISection {
  name: string;
  id: string;
  boardId: string;
  // Refactor
  tasks: Record<string, any>[];
}
const Section: React.FC<ISection> = ({
  name,
  tasks,
  id,
  boardId,
}): JSX.Element => {
  const isTodo = name.replace(" ", "").toLowerCase() === "todo";
  const navigate = useNavigate();

  const [openTaskList, setOpenTaskList] = useState<boolean>(true);

  const color = useCallback(() => {
    switch (name) {
      case "To Do":
        return "gray";
      case "In Progress":
        return "orange";
      case "Done":
        return "green";
      default:
        return "red";
    }
  }, [name]);

  const handleAddNewTask = () => {
    navigate("/create-new-task", {
      state: { sectionId: id, boardId: boardId },
    });
  };
  return (
    <div className="px-2 py-2">
      <div className="flex justify-between">
        <h1 className="font-sans font-bold uppercase text-sm">
          {name}
          {!openTaskList && (
            <span className="ml-2 text-xs lowercase text-gray-400">
              ( {tasks.length} tasks )
            </span>
          )}
        </h1>
        <ToggleButtonIcon
          isOpen={openTaskList}
          onClick={() => setOpenTaskList(!openTaskList)}
        />
      </div>
      {openTaskList &&
        tasks.map((task, index) => (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Card
                  title={task.title}
                  description={task.description}
                  color={color()}
                />
              </div>
            )}
          </Draggable>
        ))}
      {isTodo && <AddNewTask addNewTask={() => handleAddNewTask()} />}
    </div>
  );
};

export default Section;
