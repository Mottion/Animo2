import styled, { createGlobalStyle, css } from 'styled-components';
import {Calendar} from 'styled-icons/ionicons-sharp';
import {TrophyFill} from 'styled-icons/bootstrap';
import {MegaphoneLoud} from 'styled-icons/fluentui-system-filled';
import {UserCircle} from 'styled-icons/boxicons-solid/';

//@styled-icons/boxicons-solid/UserCircle
export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    background-color: #000;
    color: #fff;
  }

  a{
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  :root {
    --primary: #580082;
    --gray-light: #717171;
  }

`;

export const Container = styled.div`
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px 0;

    background: #000;

    position: fixed;
    top: 0;
    z-index: 2;

    width: 100%;
    height: 50px;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 60px; 
        height: 60px;
      }

      span {
        font-size: 3rem;
        font-family: "Almendra SC"
      }
    }

    > a:not(.logo) {
      font-family: "Almendra SC";
      font-size: 20px;

      

      @media (max-width: 800px){
        display: none;
      }
    }
  }

  nav {
    display: none;
    align-items: center;
    justify-content: space-around;

    position: fixed;
    top: 60px;
    z-index: 2;

    width: 100%;
    padding: 10px 0;

    background: #000;
    box-shadow: 0 0 0 2px var(--gray-light);

    > a:hover svg{
      color: #580082;
    }

    @media (max-width: 800px){
      display: flex;
    }
  }
  
  .banner {
    width: 100%;
    height: 60vw;
    max-height: 600px;
    margin-top: 50px;

    position: absolute;
    z-index: 0;
    
    background: url("/banner.png");
    background-size: 100% 100%;


    &::before {
      content: "";

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.207) 0%, rgba(0, 0, 0, 0.9) 84.09%);
    }
  }

  span {
    z-index: 999;
  }
`;

const cssIcon = css`
  width: 30px;
  height: 30px;
  color: var(--gray-light);
`;

export const CalendarIcon = styled(Calendar)`${cssIcon}`
export const TrophyIcon = styled(TrophyFill)`${cssIcon}`;
export const MegaphoneIcon = styled(MegaphoneLoud)`${cssIcon}`;
export const UserIcon = styled(UserCircle)`${cssIcon}`;