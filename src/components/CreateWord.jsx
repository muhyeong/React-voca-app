import React from "react";
import useAxiosApi from "../hooks/useAxiosApi";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
  const days = useAxiosApi(`http://localhost:4000/days`);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    return axios
      .post(`http://localhost:4000/words`, {
        eng: data.eng,
        kor: data.kor,
        day: data.day,
        isDone: false,
      })
      .then((res) => {
        if (res.data) {
          alert("생성이 완료되었습니다");
          navigate(`/day/${data.day}`);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={"input_area"}>
        <label>Eng</label>
        <input type="text" {...register("eng", { required: true })} />
      </div>
      <div className={"input_area"}>
        <label>Kor</label>
        <input type="text" {...register("kor")} />
      </div>
      <div className={"input_area"}>
        <label>Day</label>
        <select {...register("day")}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
