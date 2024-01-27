export default function KivalasztoMondat(props) {
  const szetbontott = props.mondat.mondat.split("_");
  let pont = 0;

  function kovMondat() {
    document.getElementById("valasztas").value = props.mondat.valasztas[0]
    props.kovMondat(pont);
  }

  function pontSzamitas() {
    if (document.getElementById("valasztas").value === props.mondat.helyes) {
      pont = 1;
    }
  }

  return (
    <div className="mondat">
      {szetbontott[0]}
      <select id="valasztas" onChange={pontSzamitas}>
        {props.mondat.valasztas.map((elem, i) => {
          return (
            <option value={elem} key={i}>
              {elem}
            </option>
          );
        })}
      </select>
      {szetbontott[1]}
      <span className="helyesseg">X</span>
      <span className="gomb">
        <button onClick={kovMondat}>Következő</button>
      </span>
    </div>
  );
}
