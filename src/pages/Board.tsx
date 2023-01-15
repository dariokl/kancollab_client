import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from "@hello-pangea/dnd";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Loading from "../components/base/Loading";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { ISection } from "../types/sectionTypes";
import Section from "../components/board/Section";

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

interface IPayload {
  updateId: string;
  taskId: string;
}

const Board: React.FC = (): JSX.Element => {
  const params = useParams();
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("board-data", async () => {
    const response = await axios.get(`/boards/${params.id}`);
    return response.data;
  });

  const { mutate } = useMutation(
    (payload: IPayload) => axios.put("/tasks/update", payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["board-data"] });
      },
    }
  );

  const onDragEnd: OnDragEndResponder = ({ source, destination }) => {
    if (!destination) return;

    const { tasks } = data.board.sections.find(
      (section: Record<string, string>) => section.id === source.droppableId
    );

    const task = tasks[source.index];

    // Change destionation in current section.
    if (destination.droppableId === source.droppableId) {
      [tasks[destination.index], tasks[source.index]] = [
        tasks[source.index],
        tasks[destination.index],
      ];

      return;
    }

    const payload = {
      updateId: destination.droppableId,
      taskId: task.id,
    };

    mutate(payload);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-cols-3 gap-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {data.board.sections.map((section: ISection) => (
          <Droppable key={section.id} droppableId={String(section.id)}>
            {(provided) => (
              <div ref={provided.innerRef}>
                <Section
                  {...provided.droppableProps}
                  name={section.name}
                  tasks={section.tasks}
                  id={section.id}
                  boardId={params.id as string}
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
