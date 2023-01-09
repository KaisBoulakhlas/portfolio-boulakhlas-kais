import React, { useEffect, useState } from 'react';
import Recaptcha from 'react-google-recaptcha';
import { images } from '../constants';
import { AppWrap, MotionWrap } from '../wrapper';

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorCaptcha, setErrorCaptcha] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const recaptchaRef = React.createRef();

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue === "") {
      setFormData({ username: '', email: '', message: '' });
      setErrorCaptcha(true);
      return;
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...formData,
      }),
    })
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((error) => alert(error))
  };

  useEffect(() => {
    if(window.scrollY >= 2500){
      setShowCaptcha(true);
    }
  }, [])
  
  return (
    <>
      <h2 style={{ padding: "3rem 0" }}  className="head-text">Vous pouvez <span>me contacter ici</span></h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:kaisboulakhlas9@gmail.com" className="p-text">kaisboulakhlas9@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+33618615128" className="p-text">06 18 61 51 28</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form method="post" onSubmit={handleSubmit} data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field" name="contact-form" id="contact-form" className="app__footer-form app__flex">
          <input type="hidden" name="form-name" value="contact-form" />
          <p hidden>
            <label htmlFor="bot-field">
              Don’t fill this out: <input name="bot-field" onChange={handleChangeInput} />
            </label>
          </p>
          {
            errorCaptcha && (
              <div>
                <h3 className="response">
                  Captcha invalide, veuillez le cocher !
                </h3>
              </div>
            )
          }
          <div className="app__flex">
            <label htmlFor="username">
              <input className="p-text" type="text" id="username" placeholder="Nom*" name="username" value={username || ""} onChange={handleChangeInput} required />
            </label>
          </div>
          <div className="app__flex">
            <label htmlFor="email">
              <input className="p-text" type="email" id="email" placeholder="Email*" name="email" value={email || ""} onChange={handleChangeInput} required />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              <textarea
                className="p-text"
                placeholder="Message*"
                value={message || ""}
                name="message"
                id="message"
                required
                onChange={handleChangeInput}
              />
            </label>
          </div>
          <label className="app__flex">
            <input type="checkbox" required /><small>J'ai lu et je suis d'accord avec la politique de confidentialité et les mentions légales de ce site.</small>
          </label>
          {
            showCaptcha && (
              <Recaptcha
                ref={recaptchaRef}
                sitekey={RECAPTCHA_KEY}
                size="normal"
                id="recaptcha-google"
                onChange={() => setDisabled(false)}
              />
            )
          }
          <button type="submit" disabled={disabled} className={disabled ? "button disable" : "button"}>{loading && recaptchaRef.current !== null ? 'Envoi...' : 'Envoyer'}</button>
        </form>
      ) : (
        <div>
          <h3 className="response">
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