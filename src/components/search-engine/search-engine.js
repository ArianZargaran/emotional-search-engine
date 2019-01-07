import React from "react";
import SearchEngineForm from "./search-engine_form";

import "styles/search-engine.css";

export default function searchEngine() {
  return (
    <div className="ese-search-engine_wrapper">
      <div className="ese-search-engine">
        <SearchEngineForm />
      </div>
    </div>
  );
}
