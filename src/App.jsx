import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("February 29, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <section
        className="main"
        style={{ fontFamily: "Roboto Mono, monospace" }}
      >
        <div className="main-og">
          <div className="text">
            <div className="text-1">
              <p>Սիրով հրավիրում ենք ծեզ</p>
              <p></p>
              <p>Մեր հարսանյաց արարողությանը</p>
            </div>
            <div className="text-2">
              <strong>01 Մարտի 2024 թ․</strong>
            </div>
            <div className="text-3">
              <p>Հարգանքով՝</p>
              <strong>Սերյոժա և Ագապի</strong>
            </div>
            <div className="text-4">
              <p>Մնացել է</p>
            </div>
            <div className="clock">
              <div className="day">
                {timerDays < 10 ? (
                  <strong>0{timerDays}</strong>
                ) : (
                  <strong>{timerDays}</strong>
                )}
                <span>Օր</span>
              </div>
              <div className="hour">
                {timerHours < 10 ? (
                  <strong>0{timerHours}</strong>
                ) : (
                  <strong>{timerHours}</strong>
                )}
                <span>Ժամ</span>
              </div>
              <div className="minute">
                {timerMinutes < 10 ? (
                  <strong>0{timerMinutes}</strong>
                ) : (
                  <strong>{timerMinutes}</strong>
                )}
                <span>Րոպե</span>
              </div>
              <div className="second">
                {timerSeconds < 10 ? (
                  <strong>0{timerSeconds}</strong>
                ) : (
                  <strong>{timerSeconds}</strong>
                )}
                <span>Վայրկյան</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="body"
        style={{ fontFamily: "Roboto Mono, monospace" }}
      >
        <div className="tragir">
          <strong>Օրվա Ծրագիր</strong>
          <div className="Psak">
            <div className="time">
              <strong>15:00</strong>
            </div>
            <div className="svg">
              <div className="svg-matani"></div>
              <div className="svg-matani-git"></div>
            </div>
            <div className="vair">
              <strong>Պսակադրություն</strong>
              <p>Խոր Վիրապի եկեղեցի</p>
            </div>
          </div>
          <div className="Psak Psak-1">
            <div className="time">
              <strong>17:30</strong>
            </div>
            <div className="svg-bakal"></div>
            <div className="vair">
              <strong>Հարսանեկան Խնջույք</strong>
              <p>Վեդիի «Եվրոպա»</p>
              <p>Ռեստորանային համալիր</p>
            </div>
          </div>
        </div>
        <div className="jamanci-kentronner">
          <div className="ekexeci">
            <p>Խոր Վիրապի եկեղեցի</p>
            <img
              src="https://traveltoarmenia.am/wp-content/uploads/2019/03/Khor-Virap-3.jpeg"
              alt="khorvirap"
              className="khorvirap"
            />
          </div>
          <div className="srah">
            <p>Վեդիի «Եվրոպա» Ռեստորանային համալիր</p>
            <img
              src="https://optim.tildacdn.com/tild3931-6330-4766-b838-616138313362/-/resize/760x/-/format/webp/Restoran.jpg"
              alt="evropa"
              className="evropa"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
