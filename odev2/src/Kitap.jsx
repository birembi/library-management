import React from "react";

function Kitap({ kitap, favorideMi, onFavoriEkle, onFavoriKaldir }) {
  const handleToggle = () => {
    if (favorideMi) {
      onFavoriKaldir(kitap.id);
    } else {
      onFavoriEkle(kitap.id);
    }
  };

  const butonStili = favorideMi ? "favori-dolu" : "favori-bos";

  return (
    <li className="kitap-kutusu">
      <div className="kitap-bilgi">
        <p className="kitap-isim">{kitap.isim}</p>
        <p className="kitap-yazar">
          {kitap.yazar} · {kitap.konu}
        </p>
      </div>
      <button className={butonStili} onClick={handleToggle}>
        <span style={{ marginRight: "5px" }}>★</span>
        {favorideMi ? "Favoride" : "Favori Ekle"}
      </button>
    </li>
  );
}

export default Kitap;