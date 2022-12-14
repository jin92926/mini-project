import Slider from "react-slick";
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`

  width: 414px;
  height: 660px;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
    
`;

const StyledSlider = styled(Slider)`

	.slick-prev {
    /* z-index로 해결 */
    z-index: 1;
    left: 40px;
  }
  .slick-next {
    right: 40px;
  }
  .slick-slide div{
    outline: none;
  }

`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

const Image = styled.img`
  max-width:100%;
  max-height:100%;
`;


const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;

`

const items = [
  { id: 1, url: '/diary.png' },
  { id: 2, url: '/diary.png' },
  { id: 3, url: '/diary.png' },
];


function Card({ openModalHandler, isOpen }) {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
  };

  return (
    <>
    {isOpen
    ? null
    :
    <Container>
      <StyledSlider {...settings}>
          {items.map((item,index) => {
          return (
            <Wrap key="index">
              <ImageContainer>
                <Image src={item.url} onClick={openModalHandler}/>
              </ImageContainer>
            </Wrap>
            );
        })}
        </StyledSlider>
    </Container> 
    }
    </>
  )
}


export default Card