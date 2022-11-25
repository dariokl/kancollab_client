import { MemoryRouter } from "react-router-dom";
import Router from "./routes";
const App: React.FC = (): JSX.Element => {
  return (
    <MemoryRouter>
      <Router />
    </MemoryRouter>
  );
};

export default App;
