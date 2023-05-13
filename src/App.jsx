import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [row, setRow] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    //rerendering 할 때도 동작
    return () => {
      document.title = "Vite + React";
    };
  }, [count]);

  useEffect(() => {
    fetch(
      "http://openapi.seoul.go.kr:8088/506e62784d7361653937694247515a/json/RealtimeCityAir/1/25"
    ).then(function (res2) {
      res2.json().then(function (res3) {
        setRow(res3.RealtimeCityAir.row);
      });
    });
  }, []);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

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
          {row.map((gu, index) => {
            return (
              <tr key={index}>
                <td>{gu.MSRSTE_NM}</td>
                <td>{gu.PM10}</td>
                <td>{gu.O3}</td>
                <td>{gu.IDEX_NM}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
