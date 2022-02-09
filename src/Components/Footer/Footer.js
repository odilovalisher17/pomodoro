import React from 'react';
import './Footer.css'
import foto1 from './facebook.png'
import foto2 from './twitter.png'
import foto3 from './stripe-climate-badge.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top container'>
          <a href="/">HOME</a>
          <a href="/privacy">PRIVACY</a>
          <a href="/">CONTACT</a>
          <a href="/app">SIMPLE PAGE</a>
      </div>

      <div className="footer-icons">
          <a href="https://www.facebook.com/pomofocus" target='_blank'>
              <img src={foto1} alt="" />
          </a>

          <a href="https://twitter.com/pomofocus" target='_blank'>
              <img src={foto2} alt="" />
          </a>

          <a href="https://climate.stripe.com/kfwPBZ" target='_blank'>
              <img src={foto3} alt="" />
          </a>
      </div>

      <div className='footer-bottom'>
        Made with &lt;3 by   
        <a href="https://uzu.works" target='_blank'>Yuya Uzu</a>
      </div>

      <div class="footer-allrights container">©Pomofocus 2021. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
