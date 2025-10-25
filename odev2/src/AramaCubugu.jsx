
import React from "react";

function AramaCubugu({ aramaMetni, handleSearch }) {
  const inputStili = {
    width: "220px",
    padding: "6px 10px", 
    marginRight: "10px",
    borderRadius: "3px", 
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  return (
    <input
      type="text"
      id="aramaMetni"
      onChange={handleSearch}
      value={aramaMetni}
      placeholder="Arama yap"
      style={inputStili}  
    />
  );
}

export default AramaCubugu;