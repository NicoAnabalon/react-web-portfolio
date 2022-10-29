import { Button } from "@mui/material";
import { useState } from "react";
import "./FlippableCard.scss";

interface IFlippableCard {
  isMobile: boolean;
  frontCard: JSX.Element;
  backCard: JSX.Element;
}

export const FlippableCard = ({
  isMobile,
  frontCard,
  backCard,
}: IFlippableCard) => {
  const [flip, setFlip] = useState<boolean>(false);

  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <div className={`card ${flip ? "flip" : ""} ${isMobile ? "mobile" : ""}`}>
      <div className="front">
        {frontCard}
        <Button
          className="flip-button"
          variant="outlined"
          onClick={handleClick}
        >
          More information
        </Button>
      </div>

      <div className="back">
        {backCard}
        <Button
          className="flip-button"
          variant="outlined"
          onClick={handleClick}
        >
          Less information
        </Button>
      </div>
    </div>
  );
};
