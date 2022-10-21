import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./views";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      {/*<Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
  </Box>*/}
    </Box>
  );
}

export default App;
