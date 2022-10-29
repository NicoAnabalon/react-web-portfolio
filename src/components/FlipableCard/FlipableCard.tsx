import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./FlipableCard.scss";

interface IFlipableCard {
  isMobile: boolean;
  frontCard: JSX.Element;
  backCard: JSX.Element;
}

export const FlipableCard = ({
  isMobile,
  frontCard,
  backCard,
}: IFlipableCard) => {
  const [showFrontCard, setShowFrontCard] = useState<boolean>(true);

  const handleFlip = () => {
    setShowFrontCard((prev: boolean) => !prev);
  };

  if (isMobile) {
    return (
      <Card variant="outlined" className="mobile-card">
        <CardContent className="mobile-card-content">
          {showFrontCard ? (
            <Box className={`mobile-card-content ${frontCard ? "" : "flip"}`}>
              {frontCard}
            </Box>
          ) : (
            <Box className={`mobile-card-content ${frontCard ? "flip" : ""}`}>
              {backCard}
            </Box>
          )}
        </CardContent>
        <CardActions className="mobile-card-actions">
          <Button size="small" variant="outlined" onClick={handleFlip}>
            More information
          </Button>
        </CardActions>
      </Card>
    );
  }

  return <p>To be implemented</p>;
};
