import Logo from "../../logo.png";
import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  ContactMail,
  GitHub,
  Home,
  LinkedIn,
  Timeline,
  Menu as MenuIcon,
} from "@mui/icons-material";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ExternalMenuOptions, MenuOptions } from "../../types";
import { GITHUB_URL, LINKEDIN_URL } from "../../utils";

const menuOptions: MenuOptions[] = [
  {
    id: "home",
    name: "Home",
    icon: <Home />,
    url: "/",
  },
  {
    id: "experience",
    name: "Experience",
    icon: <Timeline />,
    url: "/experience",
  },
  {
    id: "contact-me",
    name: "Contact Me",
    icon: <ContactMail />,
    url: "/",
  },
];

const externalMenuOptions: ExternalMenuOptions[] = [
  {
    id: "github",
    icon: <GitHub />,
    url: GITHUB_URL,
  },
  {
    id: "linkedin",
    icon: <LinkedIn />,
    url: LINKEDIN_URL,
  },
];

interface INavbarProps {
  isMobile: boolean;
}

export const Navbar = ({ isMobile }: INavbarProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (url: string) => {
    navigate(url);
    handleClose();
  };

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  if (isMobile) {
    return (
      <AppBar position="static">
        <Container>
          <Toolbar className="navbar-toolbar">
            <Button className="logo" onClick={() => navigate("/")}>
              <img src={Logo} height="50px" alt="Logo" />
            </Button>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              className="icon-container"
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>

            <Drawer anchor="right" open={open} onClose={handleClose}>
              <List>
                {menuOptions.map((menuOption) => (
                  <ListItem key={menuOption.id} disablePadding>
                    <ListItemButton
                      onClick={() => handleNavigate(`${menuOption.url}`)}
                    >
                      <ListItemIcon>{menuOption.icon}</ListItemIcon>
                      <ListItemText primary={menuOption.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <ButtonGroup
                variant="text"
                aria-label="text button group"
                className="centered-buttongroup"
              >
                {externalMenuOptions.map((externalMenuOption) => (
                  <IconButton
                    key={externalMenuOption.id}
                    onClick={() => handleExternalLink(externalMenuOption.url)}
                  >
                    {externalMenuOption.icon}
                  </IconButton>
                ))}
              </ButtonGroup>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar className="navbar-toolbar">
          <Button className="logo" onClick={() => navigate("/")}>
            <img src={Logo} height="64px" alt="Logo" />
          </Button>
          <ButtonGroup variant="text" aria-label="text button group">
            {menuOptions.map((menuOption) => (
              <Button
                key={menuOption.id}
                className="icon-container"
                onClick={() => navigate(`${menuOption.url}`)}
              >
                {menuOption.icon}
                {menuOption.name}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="text button group">
            {externalMenuOptions.map((externalMenuOption) => (
              <IconButton
                key={externalMenuOption.id}
                onClick={() => handleExternalLink(externalMenuOption.url)}
              >
                {externalMenuOption.icon}
              </IconButton>
            ))}
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
