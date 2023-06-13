import React from "react";
import { Link } from "react-router-dom";
import useAxiosApi from "../hooks/useAxiosApi";

export default function DayList() {
  const days = useAxiosApi(`http://localhost:4000/days`);
  // const [days, setDays] = useState([]);
  // useEffect(() => {
  // axios
  //   .get(`http://localhost:4000/days`) //
  //   .then((res) => {
  //     setDays(res.data);
  //   });
  // }, []);

  return (
    <ul className={"list_day"}>
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
