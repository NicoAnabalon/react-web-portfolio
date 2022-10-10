import { Box, Paper, Typography } from "@mui/material";
import "./styles.scss";
import Logo from "../logo.png";

export const Home = () => {
  return (
    <Paper elevation={3} className="home-container">
      <Box className="text-container">
        <Typography variant="h2">Nicolás Anabalón</Typography>
        <Typography variant="h3">Software Engineer</Typography>
        <Typography variant="h4">Fullstack Developer</Typography>
        <Typography className="quote">
          I consider myself a proactive person that's constantly searching for
          growth professionally and personally. Also, I enjoy challenges given
          that most of the times they end up giving you a great lesson. Lover of
          music, books, movies/series and videogames. Doing said hobbies in my
          spare time allows me to distract myself and rest so I can always give
          the best of me.
        </Typography>
      </Box>
      <Box>
        <img src={Logo} alt="Logo" />
      </Box>
    </Paper>
  );
};
