import React from "react";
import { addDoc, collection } from "firebase/firestore";

import { useState } from "react";
import { dbService } from "../../firebase";
import styled from "styled-components";

const Divcontainer = styled.div`

  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

`
const Formcontainer = styled.form`
  width: 371px;
  height: 540px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;

`



const Titleinput = styled.input`
  
  width: 273px;
  height: 101px;
  border-radius: 10px;
  color: white;
  padding: 0;
  border: 0;
  background: #181718;
`

const TwoDateWeather = styled.div`
  display: flex;
  justify-content: space-between;
  width: 273px;

`



const Datespan = styled.span`
  width: 130px;
  height: 45px;
  border-radius: 10px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #181718;
`

const Weatherinput = styled.input`
  width: 130px;
  height: 45px;
  border-radius: 10px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0;
  background: #181718;
  color: white;
`

const Contenttextarea = styled.textarea`
  width: 273px;
  height: 226px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: #181718;
  color: white;
`

const Writeinput = styled.input`
  width: 273px;
  height: 64px;
  border-radius: 10px;
  background-color: #EDAB42;
  border: 0;
  padding: 0;
`


function Form() {
  const [title, setTitle] = useState("");
  const [weather, setWeather] = useState("");
  const [text, setText] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const submitDaily = {
      제목: title,
      날짜: new Date(),
      날씨: weather,
      내용: text,
    };
    await addDoc(collection(dbService, "daily"), submitDaily);
    setTitle("");
    setWeather("");
    setText("");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeWeather = (event) => {
    setWeather(event.target.value);
  };
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <Divcontainer onSubmit={onSubmit}>
        <Formcontainer>
          <Titleinput
            value={title}
            onChange={onChangeTitle}
            type="text"
            placeholder="제목을 입력해주세요"
          />
          <TwoDateWeather>
            <Datespan>{new Date().toLocaleDateString().slice(0, -1)}</Datespan>
            <Weatherinput
              value={weather}
              type="text"
              placeholder="날씨를 입력해주세요"
              onChange={onChangeWeather}
            />
          </TwoDateWeather>

          <Contenttextarea
            value={text}
            onChange={onChangeText}
            placeholder="내용을 입력해주세요"
          />
          <Writeinput type="submit" value="Write" />
        </Formcontainer>
      </Divcontainer>
    </>
  );
}

export default Form;
