import { useEffect, useState } from 'react';
import Nav from '../Component/Nav'
import Modal from '../Component/Modal';
import styled from 'styled-components';

const Background1 = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const DivContainer123 = styled.div`

  width: 414px;
  height: 736px;
  background: #010001;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const DivContainer1234 = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  > p {
    font-size: 20px;
  }
`;


function Main(props) {
  const [showmodal, setShowmodal] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowmodal(false)
    },2000)
    return () => {
      clearTimeout(timer);
    }
  },[])

  return (
    <>
      {
        showmodal === true
        ?
        <Modal title={props.title[0]} src={props.src[0]} vanish={props.vanish}/>
        :
        <Background1>
          <DivContainer123>
            <DivContainer1234>
              <p>일기를 작성해보세요 !</p>
            </DivContainer1234>
            <Nav/>
          </DivContainer123>
        </Background1>
      }
    </>
  )
}

export default Main;