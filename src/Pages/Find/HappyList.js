import styled from "styled-components";

const Divcontainer = styled.div`
width: 299px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #181718;


`


const List = styled.li`
list-style:none;


`


const ListDivcontainer = styled.div`
display: flex;
    flex-direction: column;

`


const HappyList = function ({ item, onClickHappy, openModalHandler,isOpen, deleteList }) {


  return (
    <>
    { isOpen
      ? null
      :
      <Divcontainer>
        <List className="list" onClick={onClickHappy}>
          <ListDivcontainer className="list__content" onClick={openModalHandler}>
            <span className="list__content">{item.제목}</span>
            <span className="list__createdAt">{item.날짜.toDate().toLocaleDateString()}</span>
          </ListDivcontainer>
        </List>
      </Divcontainer>
    }
    </>
  );
};

export default HappyList;