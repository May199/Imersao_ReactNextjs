import styled from 'styled-components'
import db from '../../../db.json'

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${db.img});
  flex: 1;
  
  @media screen and (max-width: 500px) {
    background-image:none;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:linear-gradient(transparent, ${({ theme }) => theme.colors.secondary}), url(${db.img});
      display: block;
      width: 401px;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }

  @media screen and (max-width: 731px){
    &:after {
      content: "";
      width: 411px;
    }
  }
`;

export default QuizBackground;