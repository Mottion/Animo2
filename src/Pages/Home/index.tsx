import { Link } from 'react-router-dom';

import { Container, GithubIcon, LinkedinIcon, FacebookCircleIcon, DiscordIcon } from './styles';

function Home() {
  return (
    <Container>
      <div className="banner">
        <div className="social-icons">
          <img src="/Profile.jpg" alt="imagem de perfil do github" />
          <Link to="/"><GithubIcon /></Link>
          <Link to="/"><LinkedinIcon /></Link>
          <Link to="/"><FacebookCircleIcon /></Link>
          <Link to="/"><DiscordIcon /></Link>
        </div>
        <div className="search-wrapper">
          <div className="search">
            <input type="text" placeholder="boruto: next generation"/>
            {/* <Arrow /> */}
          </div>
          <div className="filters-wrapper">
            <div className="filters">
              <span>Type:</span>
              <span>Order By:</span>
              <span>Score:</span>
              <input name="Type" type="select" />
              <input name="Order_By" type="select" />
              <input name="Score" type="select" />
            </div>
            <p>genres</p>
            <span>Genre</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
