import React, { useState } from "react";
import axios from "axios";

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  const handleClick = () => setIsShow((isShow) => !isShow);
  const handleChange = () => {
    axios
      .put(`http://localhost:4000/words/${word.id}`, {
        ...word,
        isDone: !isDone,
      })
      .then((res) => {
        console.log(res.data);
        return setIsDone(res.data.isDone);
      });
  };

  const handleClickDelete = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      return axios
        .delete(`http://localhost:4000/words/${word.id}`)
        .then((res) => res.data);
    }
    return;
  };

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={handleChange} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={handleClick}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className={"btn_del"} onClick={handleClickDelete}>
          삭제
        </button>
      </td>
    </tr>
  );
}
