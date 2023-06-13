import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DayList from "../components/DayList";
import Day from "../components/Day";
import NotFound from "../components/NotFound";
import CreateWord from "../components/CreateWord";
import CreateDay from "../components/CreateDay";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <DayList />,
      },
      {
        path: "day/:day",
        element: <Day />,
      },
      {
        path: "create_word",
        element: <CreateWord />,
      },
      {
        path: "create_day",
        element: <CreateDay />,
      },
    ],
  },
]);
