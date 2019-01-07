import React from "react";

import MainHeader from "./main-header";
import SearchEngine from "./search-engine/search-engine";
import ResultsSection from "./results-section/results-section";

import "styles/reset.css";
import "styles/body.css";

export default function Body() {
  return (
    <div>
      <MainHeader>Emotional Search Engine</MainHeader>
      <SearchEngine />
      <ResultsSection />
    </div>
  );
};
