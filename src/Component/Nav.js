/* eslint-disable */
import React from "react";
import { Link , useNavigate, NavLink} from "react-router-dom";
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #181718;
  width: 100%;
  height: 76px;
  
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const ButtonCss = styled.button`
  background-color:transparent;
  border: 0;
  outline: 0;
  font-size: 20px;
  color: white;
`;


const Button = (props) => {
  return <ButtonCss >{props.name}</ButtonCss>;
};

function Nav() {
  let navigate = useNavigate();

  return (
    <Navbar>

      <ButtonDiv onClick={() => navigate('/create')}>
        <Button name="Write"/>
      </ButtonDiv>

      <ButtonDiv onClick={() => navigate('/draw')}>
        <Button name="View"/>
      </ButtonDiv>

      <ButtonDiv onClick={() => navigate('/Find')}>
        <Button name="List"/>
      </ButtonDiv>

    </Navbar>
  );
}

export default Nav;
