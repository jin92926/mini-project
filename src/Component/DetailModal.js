import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { dbService } from "../firebase"
import styled from "styled-components";

const Background = styled.div`

  background: rgba(255, 255, 255, 0.1);
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
 
`;


const DivContainer = styled.div`

  width: 371px;
  height: 540px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;


`;

const RandomHappyTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 299px;
  height: 61px;
  background-color:#181718;
  border-radius: 10px;
  color: white;
`;

const RandomHappyListTwo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 299px;
  height: 22px;
  > span {
    background: #181718;
    border-radius: 20px;
    width: 132px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

const RandomHappyImg = styled.img`
  width: 299px;
  height: 137px;
  border-radius: 10px;

`;


const RandomHappyContent = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 299px;
  height: 128px;
  background: #181718;
  border-radius: 10px;

`;

const ButtonDiv = styled.div`
  width: 299px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 13.33px;
  }

`;
const ButtonCss = styled.button`
background-color:transparent;
border: 0;
outline: 0;
color: white;
width: 299px;
  height: 64px;
  border-radius: 10px;
  background-color: red;
  border: 0;
  padding: 0;
`;


function DetailModal({ isOpen , deleteList}) {
  const [savedHappy, setSavedHappy] = useState([]);

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

  const randomHappy = savedHappy[Math.floor(Math.random() * savedHappy.length)];
  return (
    <>
      {isOpen ? (
        <Background>
          <DivContainer>
            <RandomHappyTitle>{randomHappy.제목}</RandomHappyTitle>
            <RandomHappyListTwo>
              <span className="list__createdAt">{randomHappy.날짜.toDate().toLocaleString().slice(0,11)}</span>
              <span className="list__content">{randomHappy.날씨}</span>
            </RandomHappyListTwo>
            <RandomHappyContent>{randomHappy.내용}</RandomHappyContent>
            <ButtonDiv>
              <ButtonCss onClick={()=> {deleteList(randomHappy.id)}}>삭제하기</ButtonCss>
            </ButtonDiv>
          </DivContainer>
        </Background>
      ) : null}
    </>
  );
}

export default DetailModal;