import React from "react";

function Favoriler({ favoriList, onFavoriKaldir }) {
  return (
    <div className="favoriler-kutusu">
      { }
      <h2 className="favoriler-baslik-ozel">Favoriler ({favoriList.length})</h2> 
      <ul style={{ padding: 0, listStyle: "none" }}>
        {favoriList.map((kitap) => (
          <li key={kitap.id} className="favori-kitap">
            <span style={{ fontWeight: "bold" }}>{kitap.isim}</span>
            <button
              className="kaldir-buton"
              onClick={() => onFavoriKaldir(kitap.id)}
            >
              Kaldır
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoriler;