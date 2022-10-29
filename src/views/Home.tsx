import { Box, Typography } from "@mui/material";
import "./styles.scss";
import Logo from "../logo.png";
import { Container } from "../components";

interface IHomeProps {
  isMobile: boolean;
}

export const Home = ({ isMobile }: IHomeProps) => {
  if (isMobile) {
    return (
      <Container
        isMobile={isMobile}
        children={
          <>
            <Box className="mobile-home-container">
              <Typography variant="h2" className="title">
                Nicolás Anabalón
              </Typography>
              <Typography variant="h3" className="position">
                Software Engineer
              </Typography>
              <Typography variant="h4" className="knowledge">
                Fullstack Developer
              </Typography>
              <Typography className="quote">
                I consider myself a proactive person that's constantly searching
                for growth professionally and personally. Also, I enjoy
                challenges given that most of the times they end up giving you a
                great lesson. Lover of music, books, movies/series and
                videogames. Doing said hobbies in my spare time allows me to
                distract myself and rest so I can always give the best of me.
              </Typography>
            </Box>
            <Box>
              <img src={Logo} alt="Logo" height="256px" />
            </Box>
          </>
        }
      />
    );
  }

  return (
    <Container
      isMobile={isMobile}
      children={
        <>
          <Box className="home-container">
            <Typography variant="h2">Nicolás Anabalón</Typography>
            <Typography variant="h3">Software Engineer</Typography>
            <Typography variant="h4">Fullstack Developer</Typography>
            <Typography className="quote">
              I consider myself a proactive person that's constantly searching
              for growth professionally and personally. Also, I enjoy challenges
              given that most of the times they end up giving you a great
              lesson. Lover of music, books, movies/series and videogames. Doing
              said hobbies in my spare time allows me to distract myself and
              rest so I can always give the best of me.
            </Typography>
          </Box>
          <Box>
            <img src={Logo} alt="Logo" />
          </Box>
        </>
      }
    />
  );
};
