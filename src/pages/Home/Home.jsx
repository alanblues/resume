import React from "react";
import HeaderName from "../../components/HeaderName/HeaderName";
import Layout from "../../layout/Layout";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Interests from "../Interests/Interests";
import Personal from "../Personal/Personal";
import Skills from "../Skills/Skills";

export default function Home() {
  return (
    <Layout>
      <Personal />
      <Education />
      <Experience />
      <Skills />
    </Layout>
  );
}
