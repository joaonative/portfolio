import React from "react";
import Section from "../layout/Section";

const About = () => {
  return (
    <Section title="Sobre Mim" id="aboutme">
      <h1 className="font-medium text-xl lg:text-2xl">
        Olá, eu sou João Victor de Matos Costa, um residente de 18 anos de
        Indaiatuba, SP. Desde os 17 anos, tenho interesse em programação web e
        recentemente tenho aprofundado meus conhecimentos em desenvolvimento
        frontend. Estou comprometido em produzir designs frontend e sempre busco
        me manter atualizado sobre as tecnologias e melhores práticas atuais.
        Atualmente, estou estudando Computação na Internet na FIEC (Fundação
        Indaiatubana de Educação e Cultura). Estou em busca de um estágio para
        colocar minha dedicação e habilidades em prática.
      </h1>
    </Section>
  );
};

export default About;
