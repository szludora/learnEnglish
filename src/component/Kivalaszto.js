import AngolModel from "../model/AngolModel";
import KivalasztoMondat from "./KivalasztoMondat";
import "../styles/kivalaszto.css";
import { useState } from "react";

const angol = new AngolModel();

export default function Kivalaszto() {
  // state definiálása
  const [mondat, setMondat] = useState({ ...angol.getMondat() });
  const [pont, setPont] = useState(0);
  function kovMondat(p) {
    angol.setAktIndex();
    // nem adhatok értéket egy state-nek, kizárólag csak az ő useState metódusában
    // mondat = angol.getMondat()

    // működik, viszont ez nem helyes, mivel az objektum másolatával kell tovább dolgoznunk
    // ebben az esetben az ő saját címét használjuk, ez további problémákhoz vezethet
    // ...  -tal hozunk létre egy másolatot róla
    setMondat({ ...angol.getMondat() });
    //  nem lehet pont+=p, mert felülírják, ezért csak pont+p,ezt a state kezeli le
    // alaphiba: a state-t módosítod (ugyanazt a címet)
    setPont(pont + p);
  }

  return (
    <div className="jatekter">
      <div className="cim">{angol.getCim()}</div>
      <div className="mondat">
        <KivalasztoMondat mondat={mondat} kovMondat={kovMondat} />
      </div>

      <div className="pontok">
        Pontszám:
        <span>{pont}</span>
      </div>
    </div>
  );
}
