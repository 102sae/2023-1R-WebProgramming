import "./App.css";
import { useState } from "react";

function App() {
  const [row, setRow] = useState([]);
  function onClickLoad() {
    if (row.length === 0) {
      fetch(
        "http://openapi.seoul.go.kr:8088/506e62784d7361653937694247515a/json/RealtimeCityAir/1/25"
      ).then(function (res2) {
        res2.json().then(function (res3) {
          setRow(res3.RealtimeCityAir.row);
        });
      });
    }
  }
  console.log(row);

  return (
    <>
      <button onClick={onClickLoad}>API 호출</button>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>PM10</th>
            <th>O3</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {row.map(function (obj) {
            return (
              <tr>
                <td>{obj.MSRSTE_NM}</td>
                <td>{obj.PM10}</td>
                <td>{obj.O3}</td>
                <td>{obj.IDEX_NM}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
