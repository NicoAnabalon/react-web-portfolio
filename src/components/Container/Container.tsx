import { Paper } from "@mui/material";
import "./Container.scss";

interface IContainerProps {
  isMobile: boolean;
  children: JSX.Element;
}

export const Container = ({ isMobile, children }: IContainerProps) => {
  if (isMobile) {
    return (
      <Paper elevation={3} className="mobile-container">
        {children}
      </Paper>
    );
  }

  return (
    <Paper elevation={3} className="container">
      {children}
    </Paper>
  );
};
