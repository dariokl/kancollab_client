import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import Card from "../../components/card/Card";
interface ISection {
  name: string;
  tasks: any[];
}
const Section: React.FC<ISection> = ({ name, tasks }): JSX.Element => {
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
              <Card title={task.title} />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Section;
