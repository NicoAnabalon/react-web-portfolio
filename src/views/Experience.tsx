import { Container, ExperienceTimeline } from "../components";

interface IExperienceProps {
  isMobile: boolean;
}

export const Experience = ({ isMobile }: IExperienceProps) => {
  return (
    <Container
      isMobile={isMobile}
      children={<ExperienceTimeline isMobile={isMobile} />}
    />
  );
};
