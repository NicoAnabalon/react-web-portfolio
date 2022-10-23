import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { useWindowSize } from "./hooks";
import { Home } from "./views";

function App() {
  const { width } = useWindowSize();
  const isMobile = (width ?? window.screen.width) < 1024;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar isMobile={isMobile} />
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
