/* eslint-disable */
import {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Create from "./Pages/Create/Create";
import Draw from "./Pages/Draw/Draw";
import Find from "./Pages/Find/Find";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  const [title, setTitle] = useState(['Daily Diary' ,'랜덤으로 일기를 보시겠어요?', '여기를 클릭해주세요 !']);
  const [vanish, setVanish] = useState(true);


  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main title={title} vanish={vanish}/>} />
          <Route path="/create" element={<Create />} />
          <Route path="/draw" element={<Draw title={title} vanish={vanish} />} />
          <Route path="/Find" element={<Find />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;