import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "@hello-pangea/dnd";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Loading from "../components/base/Loading";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { ISection } from "../types/sectionTypes";
import Section from "../components/board/Section";
import axios from "../api/axios";

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
  const axios = useAxiosPrivate();

  const { data, isLoading } = useQuery("board-data", async () => {
    const response = await axios.get(`/boards/${params.id}`);
    return response.data;
  });

  const { mutate } = useMutation((data) => axios.post("tasks/update", data));

  const onDragEnd: OnDragEndResponder = ({ source, destination }) => {
    if (!destination) return;
    const { tasks } = data.board.sections.find(
      (section: Record<string, string>) => section.id === source.droppableId
    );

    const task = tasks[source.index];

    mutate({
      updateId: destination?.droppableId,
      removeId: source.droppableId,
      taskId: task.id,
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-row gap-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {data.board.sections.map((section: ISection) => (
          <Droppable key={section.id} droppableId={String(section.id)}>
            {(provided) => (
              <div className="basis-1/2" ref={provided.innerRef}>
                <Section
                  {...provided.droppableProps}
                  name={section.name}
                  tasks={section.tasks}
                  id={section.id}
                />
                <span>{provided.placeholder}</span>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default Board;