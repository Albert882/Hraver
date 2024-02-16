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
              <p>Սիրով հրավիրում ենք ձեզ</p>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.215332284215!2d44.57356582136234!3d39.87836757071336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4015325d369f0d4b%3A0xeba04cad0e28a010!2z0KXQvtGAINCS0LjRgNCw0L8!5e0!3m2!1sru!2sam!4v1708081212126!5m2!1sru!2sam"
              style={{ border: "0" }}
              width="600"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="srah">
            <p>Վեդիի «Եվրոպա» Ռեստորանային համալիր</p>
            <img src="/Img/restoran.jpg" alt="evropa" className="evropa" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.3632604708654!2d44.72448676272156!3d39.91406941545753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4015367bb67bf047%3A0xab724321a84f63ba!2sArdshinBank!5e0!3m2!1sru!2sam!4v1708102478941!5m2!1sru!2sam"
              width="600"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
