import React, { useEffect, useState } from "react";
import Dummy from "../db/data.json";
import { useNavigate, useParams } from "react-router-dom";
import Word from "./Word";
import axios from "axios";
import useAxiosApi from "../hooks/useAxiosApi";

export default function Day() {
  const { day } = useParams();
  const navigate = useNavigate();
  const words = useAxiosApi(`http://localhost:4000/words?day=${day}`);

  // const wordList = Dummy.words.filter((word) => word.day === Number(day));

  // const [words, setWords] = useState([]);
  //
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/words?day=${day}`) //
  //     .then((res) => {
  //       return setWords(res.data);
  //     });
  // }, []);

  return (
    <>
      <h1>Day{day}</h1>
      <table>
        <tbody>
          {words.map((word) => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
}
