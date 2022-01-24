import React from 'react';
import {useHistory } from 'react-router-dom';
import './noBud.css';

function NoBud() {
	const history = useHistory(); 
  return (
    <section className="no-bud">
    <h2 className="no-bud__title">404</h2>
    <p className="no-bud__text">Страница не найдена</p>
    <button className="no-bud__link" onClick={() => history.goBack()}>Назад</button>
    </section>
  );
}

export default NoBud;