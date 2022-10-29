import { Box, Typography } from "@mui/material";
import { FlippableCard } from "../FlippableCard/FlippableCard";
import "./ExperienceTimeline.scss";
import VacasaLogo from "../../assets/vacasa.jpeg";
import KuantumLogo from "../../assets/kuantum.jpeg";
import FebosLogo from "../../assets/febos.jpeg";

interface IExperience {
  key: string;
  companyName: string;
  logoURL: string;
  backgroundColor: string;
  position: string;
  dates: string[];
  technologies: string;
  summary: string[];
}

const experiences: IExperience[] = [
  {
    key: "vacasa",
    companyName: "Vacasa",
    position: "Software Engineer",
    logoURL: VacasaLogo,
    backgroundColor: "#003449",
    dates: ["Dicember 2021 - Present"],
    technologies: "React | Node.js | AWS | Git | PostgreSQL | MySQL | JS | CSS",
    summary: [
      "Fullstack development, mainly with the use of React, NodeJS, PostgreSQL, MySQL and AWS.",
    ],
  },
  {
    key: "kuantum-spa",
    companyName: "Kuantum Spa",
    position: "Backend Developer",
    logoURL: KuantumLogo,
    backgroundColor: "white",
    dates: ["March 2021 - Dicember 2021"],
    technologies: "PostgreSQL | .NET | C# | React | JS | JasperReports",
    summary: [
      "Create from scratch several modules of a health software for leading company in health industry in Chile",
      "Microservices creation for integrations between different modules.",
      "Creation and management of databases.",
      "Reports creation using JasperReports and management of JasperReports Server.",
    ],
  },
  {
    key: "febos-chile",
    companyName: "Febos Chile",
    logoURL: FebosLogo,
    backgroundColor: "white",
    position: "IT Analyst",
    dates: ["March 2020 - March 2021", "January 2020 - February 2020"],
    technologies: "MySQL | JS | HTML | CSS | XSL | XML",
    summary: [
      "Creation of personalized templates according to the needs of each customer.",
      "Database management and reports generation.",
      "Obtaining customer requirements.",
      "Customer training.",
      "Template creation for electronic documents retrieving information from XML files and adapted to each customer according to their needs.",
    ],
  },
];

interface IExperienceTimelineProps {
  isMobile: boolean;
}

export const ExperienceTimeline = ({ isMobile }: IExperienceTimelineProps) => {
  return (
    <Box className={`${isMobile ? "mobile" : ""} flipable-card-container`}>
      {experiences.map((experience) => (
        <FlippableCard
          key={experience.key}
          isMobile={isMobile}
          frontCard={
            <>
              <Typography variant="h4">{experience.companyName}</Typography>
              <Box
                component="div"
                className="company-logo-container"
                sx={{
                  backgroundColor: experience.backgroundColor,
                  border: `1px solid ${experience.backgroundColor}`,
                }}
              >
                <img
                  className="company-logo"
                  src={experience.logoURL}
                  alt={`${experience.key}-logo`}
                />
              </Box>
              <Typography variant="h5">{experience.position}</Typography>
              {experience.dates.map((date, index) => (
                <Typography
                  key={index}
                  variant="subtitle1"
                  color="text.secondary"
                >
                  {date}
                </Typography>
              ))}
              <Typography variant="body2" className="technologies">
                {experience.technologies}
              </Typography>
            </>
          }
          backCard={
            <Box component="ul">
              {experience.summary.map((sum, index) => (
                <Box component="li" key={index}>
                  {sum}
                </Box>
              ))}
            </Box>
          }
        />
      ))}
    </Box>
  );
};
