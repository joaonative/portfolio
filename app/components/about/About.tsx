import React from "react";
import Section from "../layout/Section";

const About = () => {
  return (
    <Section title="About Me" id="aboutme">
      <div></div>
      <h1 className="font-medium text-xl lg:text-2xl">
        Hello I am João Victor de Matos Costa, an 18-year-old resident of
        Indaiatuba, SP. Since I was 17, I have been interested in web
        programming, and recently I have been deepening my knowledge in frontend
        development. I am committed to producing frontend designs, and I always
        seek to stay updated on current technologies and best practices.
        Currently, I am studying Internet Computing at FIEC (Indaiatuba
        Foundation for Education and Culture). I am looking for internships to
        put my dedication and skills into practice.
      </h1>
    </Section>
  );
};

export default About;
