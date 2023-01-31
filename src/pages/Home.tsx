import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import BoardContainer from "../components/home/BoardContainer";
import ContainerItem from "../components/home/ContainerItem";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

interface IBoard {
  id: string;
  name: string;
  owner: string;
}

const Home = () => {
  const axios = useAxiosPrivate();
  const { data, isLoading } = useQuery(
    "user-boards",
    () => axios.get("/user-boards/my-boards"),
    {
      select: ({ data }) => {
        return data.boards;
      },
    }
  );

  if (isLoading) return null;

  return (
    <div className="flex justify-center h-full items-center">
      {!data.length ? (
        <div className="flex align-center items-center justify-center w-1/2 h-1/6 border-dashed bg-slate-200 border-2 border-slate-300 rounded-lg m-4 opacity-80 hover:opacity-100">
          <Link to="/create-board">
            <span className="text-xs font-bold cursor-pointer">
              No boards found, click here and create new one.
            </span>
          </Link>
        </div>
      ) : (
        <BoardContainer>
          {data.map(({ board }: { board: IBoard }) => (
            <ContainerItem
              id={board.id}
              name={board.name}
              owner={board.owner}
              key={board.id}
            />
          ))}
        </BoardContainer>
      )}
    </div>
  );
};

export default Home;
