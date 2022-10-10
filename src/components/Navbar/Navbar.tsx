import Logo from "../../logo.png";
import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ContactMail,
  GitHub,
  Home,
  LinkedIn,
  Timeline,
} from "@mui/icons-material";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar className="navbar-toolbar">
          <Button className="logo" onClick={() => navigate("/")}>
            <img src={Logo} height="64px" alt="Logo" />
          </Button>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button className="icon-container" onClick={() => navigate("/")}>
              <Home />
              Home
            </Button>
            <Button className="icon-container" onClick={() => navigate("/")}>
              <Timeline />
              Experience
            </Button>
            <Button className="icon-container" onClick={() => navigate("/")}>
              <ContactMail />
              Contact Me
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="text button group">
            <IconButton
              onClick={() =>
                handleExternalLink("https://github.com/NicoAnabalon")
              }
            >
              <GitHub />
            </IconButton>
            <IconButton
              onClick={() =>
                handleExternalLink(
                  "https://www.linkedin.com/in/nicol%C3%A1s-felipe-anabal%C3%B3n-abarca/"
                )
              }
            >
              <LinkedIn />
            </IconButton>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
