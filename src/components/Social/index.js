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
    @media screen and (max-width: 500px){
        height:38px;
        width:120px;
        margin-top:-5%;
        right:-288px;
        opacity:36%;
    }
    @media screen and (max-width: 731px){
        right:-288px;
        opacity:36%;
    }
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
    margin-top:40%;
    left:6px;

    @media screen and (max-width: 500px){
        height:35px;
        width:35px;
        left:36px;
    }
    
`
Social.Instagram = styled.div`
    background-image: url(${db.instagram});
    height:80px;
    width:80px;
    opacity:100%;
    background-position: center;
    background-size: cover;
    position: absolute;
    margin-top:150%;
    left:20px;

    @media screen and (max-width: 500px){
        height:35px;
        width:35px;
        left:80px;
        margin-top:-29%;
    }
`
export default Social;