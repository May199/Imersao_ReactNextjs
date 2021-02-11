import styled from 'styled-components'
import db from '../../../db.json'

const Social = styled.div`
    height:288px;
    width:110px;
    opacity:56%;
    background-color:#D9D9D9;
    position:absolute;
    right:2px;
    margin-top: 14%;
    border-radius: 4px;
    
`
Social.Github = styled.div`
    background-image: url(${db.github});
    flex: 1;
    height:100px;
    width:100px;
    opacity:100%;
    background-position: center;
    background-size: cover;
    position: absolute;
    margin-top:25%;
    left:6px;
    
`
Social.Instagram = styled.div`
    background-image: url(${db.instagram});
    height:80px;
    width:80px;
    opacity:100%;
    background-position: center;
    background-size: cover;
    position: absolute;
    margin-top:140%;
    left:20px;
`
console.log(db.instagram);
export default Social;