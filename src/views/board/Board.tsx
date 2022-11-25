import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Section from "./Section";

const mockData = [
  {
    id: uuidv4(),
    title: "Todo",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn JavaScript",
      },
      {
        id: uuidv4(),
        title: "Learn Git",
      },
      {
        id: uuidv4(),
        title: "Learn Python",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "In progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn CSS",
      },
      {
        id: uuidv4(),
        title: "Learn Golang",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Done",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn HTML",
      },
    ],
  },
];

const Board: React.FC = (): JSX.Element => {
  const params = useParams();

  console.log(params);
  const [data, setData] = useState(mockData);
  const onDragEnd = () => {
    console.log("end");
  };
  return (
    <div className="flex flex-row gap-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {data.map((section) => (
          <Droppable key={section.id} droppableId={String(section.id)}>
            {(provided) => (
              <div className="basis-1/2" ref={provided.innerRef}>
                <Section
                  {...provided.droppableProps}
                  name={section.title}
                  tasks={section.tasks}
                />
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default Board;
