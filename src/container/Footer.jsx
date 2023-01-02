import React, { useState } from 'react';

import { images } from '../constants';
import { AppWrap, MotionWrap } from '../wrapper';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target
    //const recaptchaValue = recaptchaRef.current.getValue();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        //'g-recaptcha-response': recaptchaValue,
        ...formData,
      }),
    })
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((error) => alert(error))
  };

  return (
    <>
      <h2 className="head-text">Vous pouvez me contacter ici</h2>

      <div id="contact" className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:kaisboulakhlas9@gmail.com" className="p-text">kaisboulakhlas9@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+33618615128" className="p-text">0618615128</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form method="post" onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bot-field" name="contact-form" id="contact-form" className="app__footer-form app__flex">
          <input type="hidden" name="form-name" value="contact-form" />
          <p hidden>
            <label htmlFor="bot-field">
                Don’t fill this out: <input name="bot-field" onChange={handleChangeInput} />
            </label>
          </p>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Nom" name="username" value={username} onChange={handleChangeInput} required />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} required />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Message"
              value={message}
              name="message"
              required
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="button">{!loading ? 'Envoyer' : 'Envoi...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Merci de votre réponse, je vous recontacterai dans les plus brefs délais !
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);