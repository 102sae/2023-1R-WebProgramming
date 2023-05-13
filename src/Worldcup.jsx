import 고수 from "./assets/고수.jpg";
import 공명 from "./assets/공명.jpg";
import 주연 from "./assets/주연.jpg";
import 현재 from "./assets/현재.jpg";
import 박형식 from "./assets/박형식.jpg";
import 서강준 from "./assets/서강준.jpg";
import 안효섭 from "./assets/안효섭.jpg";
import 이도현 from "./assets/이도현.jpg";
import 이신영 from "./assets/이신영.jpg";
import 이제훈 from "./assets/이제훈.jpg";
import 최병찬 from "./assets/최병찬.jpg";
import 황민현 from "./assets/황민현.jpg";
import 백현 from "./assets/백현.jpg";
import 김범 from "./assets/김범.jpg";
import 김수현 from "./assets/김수현.jpg";
import 남주혁 from "./assets/남주혁.jpg";
import "./Worldcup.css";
import { useEffect, useState } from "react";

const candidate = [
  { name: "고수", src: 고수 },
  { name: "공명", src: 공명 },
  { name: "주연", src: 주연 },
  { name: "현재", src: 현재 },
  { name: "백현", src: 백현 },
  { name: "김범", src: 김범 },
  { name: "박형식", src: 박형식 },
  { name: "서강준", src: 서강준 },
  { name: "안효섭", src: 안효섭 },
  { name: "이도현", src: 이도현 },
  { name: "이신영", src: 이신영 },
  { name: "이제훈", src: 이제훈 },
  { name: "최병찬", src: 최병찬 },
  { name: "황민현", src: 황민현 },
  { name: "김수현", src: 김수현 },
  { name: "남주혁", src: 남주혁 },
];

function Worldcup() {
  const [game, setGame] = useState([]); // 이상형 배열
  const [round, setRound] = useState(0); //이상형 라운드 16강, 8강
  const [nextGame, setNextGame] = useState([]); //다음 라운드에 올라가는 이상형 배열
  useEffect(() => {
    setGame(
      candidate
        .map((c) => {
          return { name: c.name, src: c.src, order: Math.random() };
        })
        .sort((l, r) => {
          return l.order - r.order;
        })
    );
  }, []); // 빈 배열을 넣었을 때가 첫 화면이 로드 될 때.
  //첫 화면이 로드될 때 랜덤 배열을 넣어줌.

  useEffect(() => {
    if (game.length > 1 && round + 1 > game.length / 2) {
      setGame(nextGame);
      setRound(0);
      setNextGame([]);
    }
  }, [round]);
  //결승자 출력
  if (game.length === 1) {
    return (
      <div className="winner_wrap">
        <h3>이상형 월드컵 우승 : {game[0].name}</h3>
        <img className="winner_img" src={game[0].src} />
      </div>
    );
  }
  if (game.length === 0 || round + 1 > game.length / 2) {
    return <p>로딩중</p>;
  }
  return (
    <div className="root">
      <p>
        이상형 월드컵 {round + 1}/{game.length / 2}{" "}
        <b>{game.length === 2 ? "결승" : game.length + "강"}</b>
      </p>
      <div className="img_wrap">
        <div className="img_left">
          <img
            src={game[round * 2].src}
            onClick={() => {
              setNextGame((prev) => prev.concat(game[round * 2]));
              setRound((prev) => prev + 1);
            }}
          />
          <span className="img_name">{game[round * 2].name}</span>
        </div>
        <div className="img_right">
          <img
            src={game[round * 2 + 1].src}
            onClick={() => {
              setNextGame((prev) => prev.concat(game[round * 2 + 1]));
              setRound((prev) => prev + 1);
            }}
          />
          <span className="img_name">{game[round * 2 + 1].name}</span>
        </div>
      </div>
    </div>
  );
}
export default Worldcup;
