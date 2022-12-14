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
  dates: string;
  technologies: string;
  summary: string;
  details: string[];
}

const experiences: IExperience[] = [
  {
    key: "vacasa",
    companyName: "Vacasa",
    position: "Software Engineer",
    logoURL: VacasaLogo,
    backgroundColor: "#003449",
    dates: "Dicember 2021 - Present",
    technologies: "React | Node.js | AWS | Git | PostgreSQL | MySQL | JS | CSS",
    summary:
      "I am working on a team responsible for satisfying analysts' needs to manage rental properties correctly.",
    details: [
      "Creation and maintenance of several web applications.",
      "Creation and maintenance of several REST APIs.",
      "Creation, management and maintenance of Amazon Web Services’ lambdas and containers.",
      "Creation, management and maintenance of PostgreSQL and MySQL databases.",
    ],
  },
  {
    key: "kuantum-spa",
    companyName: "Kuantum Spa",
    position: "Software Developer",
    logoURL: KuantumLogo,
    backgroundColor: "white",
    dates: "March 2021 - Dicember 2021",
    technologies: "PostgreSQL | .NET | C# | React | JS | JasperReports",
    summary:
      "Worked on a team responsible for creating new modules for a web application of the biggest company related to health software in Chile.",
    details: [
      "Created and developed several modules from scratch.",
      "Created and developed several microservices responsible for the integration between modules.",
      "Created and managed databases.",
      "Created reports using JasperReports.",
      "Managed a server dedicated for report generation using JasperServer.",
    ],
  },
  {
    key: "febos-chile",
    companyName: "Febos Chile",
    logoURL: FebosLogo,
    backgroundColor: "white",
    position: "IT Operations Analyst",
    dates: "March 2020 - March 2021",
    technologies: "MySQL | JS | HTML | CSS | XSL | XML",
    summary:
      "Worked on the Operations team responsible for the customers’ needs.",
    details: [
      "Created and developed templates for tributary electronic documents, personalized for each customers’ needs and branding.",
      "Managed a database and generated reports.",
      "Obtained customers’ requirements.",
      "Trained customers into how to use the web application.",
    ],
  },
  {
    key: "febos-chile-practice",
    companyName: "Febos Chile",
    logoURL: FebosLogo,
    backgroundColor: "white",
    position: "Intern",
    dates: "January 2020 - February 2020",
    technologies: "MySQL | JS | HTML | CSS | XSL | XML",
    summary:
      "Worked on the Operations team responsible for the customers’ needs.",
    details: [
      "Created and developed templates for tributary electronic documents, personalized for each customers’ needs and branding.",
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
              <Box component="div" className="flippable-card-header">
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
              </Box>

              <Box component="div" className="flippable-card-content">
                <Typography variant="subtitle1" color="text.secondary">
                  {experience.dates}
                </Typography>
                <Typography variant="body2" className="summary">
                  {experience.summary}
                </Typography>
                <Typography variant="body2" className="technologies">
                  {experience.technologies}
                </Typography>
              </Box>
            </>
          }
          backCard={
            <div>
              <Box component="ul">
                {experience.details.map((detail, index) => (
                  <Box component="li" key={index}>
                    {detail}
                  </Box>
                ))}
              </Box>
            </div>
          }
        />
      ))}
    </Box>
  );
};
