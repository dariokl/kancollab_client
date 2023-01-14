import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddNewTask from "../base/AddNewTask";
import Card from "../card/Card";

interface ISection {
  name: string;
  id: string;
  tasks: Record<string, any>[];
}
const Section: React.FC<ISection> = ({ name, tasks, id }): JSX.Element => {
  const isTodo = name.replace(" ", "").toLowerCase() === "todo";
  const navigate = useNavigate();

  const handleAddNewTask = () => {
    navigate("/create-new-task", { state: { sectionId: id } });
  };
  return (
    <div className="px-2 py-2 flex-col">
      <h1 className="font-sans font-bold uppercase text-sm"> {name}</h1>
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Card title={task.title} description={task.description} />
            </div>
          )}
        </Draggable>
      ))}
      {isTodo && <AddNewTask addNewTask={() => handleAddNewTask()} />}
    </div>
  );
};

export default Section;
