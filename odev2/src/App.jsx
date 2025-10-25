
import React, { useState } from "react";
import "./App.css";
import AramaCubugu from "./AramaCubugu";
import KitapListe from "./KitapListe";
import Favoriler from "./Favoriler"; 

function App() {
  const [aramaMetni, setAramaMetni] = useState(
    localStorage.getItem("aranan") || ""
  );

  const [konuFiltresi, setKonuFiltresi] = useState("Tümü");

  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem("favoriKitaplar")) || []
  );

  const kitaplar = [
    { id: 1, isim: "React'e giriş", yazar: "D.usta", konu: "Web" },
    { id: 2, isim: "İleri JavaScript", yazar: "S.Kılıç", konu: "Web" },
    { id: 3, isim: "Veri Yapıları", yazar: "A.Demir", konu: "CS" },
    { id: 4, isim: "Algoritmalar", yazar: "E.Kaya", konu: "CS" },
    { id: 5, isim: "UI/UX Temelleri", yazar: "N.Akın", konu: "Tasarım" },
  ];

  const handleSearch = (event) => {
    setAramaMetni(event.target.value);
  };

  const handleFiltreDegistir = (event) => {
    setKonuFiltresi(event.target.value);
  };

  const favoriEkle = (kitapId) => {
    const kitap = kitaplar.find((k) => k.id === kitapId);
    if (kitap && !favoriler.some((f) => f.id === kitapId)) {
      setFavoriler([...favoriler, kitap]);
    }
  };

  const favoriKaldir = (kitapId) => {
    setFavoriler(favoriler.filter((kitap) => kitap.id !== kitapId));
  };

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
    localStorage.setItem("favoriKitaplar", JSON.stringify(favoriler));
  }, [aramaMetni, favoriler]);

  const aramaMetniKucuk = aramaMetni.toLowerCase();

  const arananKitaplar = kitaplar.filter(function (kitap) {
    const konuEslesmesi =
      konuFiltresi === "Tümü" || kitap.konu === konuFiltresi;

    const aramaGeciyorMu =
      kitap.isim.toLowerCase().includes(aramaMetniKucuk) ||
      kitap.yazar.toLowerCase().includes(aramaMetniKucuk);

    if (aramaMetniKucuk === "") {
      return konuEslesmesi;
    }

    return konuEslesmesi && aramaGeciyorMu;
  });

  const konuSecenekleri = ["Tümü", ...new Set(kitaplar.map((k) => k.konu))];

  return (
    <div className="ana-kapsayici">
      <h1 className="baslik">Mini Kitaplık</h1>

      <div className="arama-filtre">
        <AramaCubugu aramaMetni={aramaMetni} handleSearch={handleSearch} />

        <select
          className="filtre-dropdown"
          onChange={handleFiltreDegistir}
          value={konuFiltresi}
        >
          {konuSecenekleri.map((konu) => (
            <option key={konu} value={konu}>
              {konu}
            </option>
          ))}
        </select>
      </div>

      <div className="icerik-alani">
        <KitapListe
          kitapList={arananKitaplar}
          favoriKitaplar={favoriler}
          onFavoriEkle={favoriEkle}
          onFavoriKaldir={favoriKaldir}
        />
        <Favoriler favoriList={favoriler} onFavoriKaldir={favoriKaldir} />
      </div>
    </div>
  );
}

export default App;