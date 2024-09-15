import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Home/Hero";
import SearchSection from "../Components/Home/SearchSection";
import Midsection from "../Components/Home/Midsection";
import SpecializationCard from "../Components/Home/SpecializationCard";
import BlogSection from "../Components/Home/BlogSection";
import TypeCard from "../Components/Home/TypeCard";
import BottomSectionCard from "../Components/Home/BottomSectionCard";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="container-fluid">
      <div
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          color: "#ffffff",
          backgroundColor: "#2AA7FF",
        }}
      >
        The Health and well being of the Patient and their health care, our team
        will always be ready, so we allow best practices foor cleanliness
      </div>
      <Navbar />
      <Hero />
      <SearchSection />
      <Midsection />
      <SpecializationCard />
      <BlogSection />
      <TypeCard />
      <Faq />
      <BottomSectionCard />
      <Footer />
    </div>
  );
}
