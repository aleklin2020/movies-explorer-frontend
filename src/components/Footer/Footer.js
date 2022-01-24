import React from 'react';
import './footer.css';

function Footer() {
  return (
   <footer className="footer main__box">
   <h2 className="footer__title">Учебный проект Яндекс.Практикум x BeatFilm</h2>
   <div className="footer__box">
   <p className="footer__text">© 2022 Alex Lin</p>
   <ul className="footer__lists">
 <li className="footer__list"><a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a></li>
  <li className="footer__list"><a className="footer__link" href="https://github.com/aleklin2020">Github</a></li>
   <li className="footer__list"><a className="footer__link" href="https://alex-lin.ru">My sait</a></li>
   </ul>
   </div>
   </footer>
  );
}

export default Footer;