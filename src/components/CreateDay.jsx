import React from "react";
import useAxiosApi from "../hooks/useAxiosApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
  const day = useAxiosApi(`http://localhost:4000/days`);
  const navigate = useNavigate();

  const handleClick = () => {
    axios
      .post(`http://localhost:4000/days`, {
        day: day.length + 1,
      })
      .then((res) => {
        if (res.data) {
          alert("추가 되었습니다");
          navigate("/");
        }
      });
  };
  return (
    <div>
      <h3>{`현재 일수 : ${day.length}일`}</h3>
      <button onClick={handleClick}>Day 추가</button>
    </div>
  );
}
