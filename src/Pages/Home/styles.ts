import styled, {css} from 'styled-components';
import { Github, Linkedin } from 'styled-icons/bootstrap/'
import { FacebookCircle, Discord } from 'styled-icons/boxicons-logos/'

export const Container = styled.div`
  width: 100%;

  .banner {
    width: 100%;
    height: 60vw;
    margin-top: 50px;

    position: relative;

    .social-icons {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      position: absolute;
      left: 20px;
      top: 50%;
      
      transform: translateY(-50%);
      
      padding: 5px;

      background: #000;
      box-shadow: -4px 4px 0px var(--primary);
      border-radius: 20px;

      > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 5px 0 ;
      }
    }
  }
`;

var cssIcon = css`
  width: 40px;
  height: 40px;
  color: var(--primary);
  margin: 5px 0 ;
`;

export const GithubIcon = styled(Github)`${cssIcon}`;
export const LinkedinIcon = styled(Linkedin)`${cssIcon}`;
export const FacebookCircleIcon = styled(FacebookCircle)`${cssIcon}`;
export const DiscordIcon = styled(Discord)`${cssIcon}`;