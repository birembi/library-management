import React from "react";
import Kitap from "./Kitap";   

function KitapListe({
  kitapList,
  favoriKitaplar,
  onFavoriEkle,
  onFavoriKaldir,
}) {
  return (
    <div className="kitaplar-alani">
      <ul className="kitap-listesi">
        {kitapList.map((kitap) => {
          const favorideMi = favoriKitaplar.some((f) => f.id === kitap.id);
          return (
            <Kitap
              key={kitap.id}
              kitap={kitap}
              favorideMi={favorideMi}
              onFavoriEkle={onFavoriEkle}
              onFavoriKaldir={onFavoriKaldir}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default KitapListe;