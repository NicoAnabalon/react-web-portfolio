import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components";
import { useWindowSize } from "./hooks";
import { ContactMe, Experience, Home } from "./views";

function App() {
  const { width } = useWindowSize();
  const isMobile = (width ?? window.screen.width) < 1024;

  return (
    <Box className="body-container">
      <Navbar isMobile={isMobile} />
      <Box sx={{ flex: 1 }} className="route-container">
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route
            path="/experience"
            element={<Experience isMobile={isMobile} />}
          />
          <Route
            path="/contact-me"
            element={<ContactMe isMobile={isMobile} />}
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
