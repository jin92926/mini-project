import { useEffect, useState } from 'react';
import styled from 'styled-components';


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
  background: #010001;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeout 2s;
  @keyframes fadeout {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
  }
`;

const DivContainer1 = styled(DivContainer)`

  > .div2 {
    display: flex;
    flex-direction: column;
    font-size: 30px;

  }
`;

const Modal = (props) => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setClose(false)
    }, 2000);
    return () => {
      // 버그 방지 
      clearTimeout(timer);
    };
  }, [])

  return(
    <>
      <Background>
        {
        close === true
        ? 
          <DivContainer1>
            <div className='div2'>
              <p>{props.title}</p>
            </div>
          </DivContainer1>
          :null
        }
      </Background>
    </>
    )
}

export default Modal;