import React, { useState, useEffect } from "react";
import Nav from "../../Component/Nav";

import {
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc
} from "firebase/firestore";
import { dbService } from "../../firebase";
import HappyList from "./HappyList";
import styled from "styled-components";


const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color : #FCF6F5;
`;

const DivContainer = styled.div`
  width: 414px;
  height: 736px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #010001;


`;
const SaveDivContainer1 = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

`


const SaveDivContainer = styled.div`
width: 359px;
height: 599px;
background: rgba(255, 255, 255, 0.1);
display: flex;
flex-direction: column;
align-items: center;

`

const Find = () => {
  const [savedHappy, setSavedHappy] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = (event) => {
    setIsOpen(!isOpen);
  };
  const deleteList = async (id) => {
    const listDoc = doc(dbService, "daily", id);
    await deleteDoc(listDoc);
}

  useEffect(() => {
    const q = query(collection(dbService, "daily"), orderBy("날짜", "desc"));
    onSnapshot(q, (snapshot) => {
      const happyArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSavedHappy(happyArr);
    });
  }, []);


  return (
    <Background>
      <DivContainer>
        <SaveDivContainer1>
          <SaveDivContainer>
            {savedHappy.map((item) => (
              <HappyList key={item.id} item={item} isOpen={isOpen}/> 
            ))}
          </SaveDivContainer>
        </SaveDivContainer1>
        <Nav />
      </DivContainer>
    </Background>
  );
};

export default Find;
