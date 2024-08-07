import React from "react";

import "./Footer.scss";
import { LinkBtn } from "../Button/Button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="contacts__title fz--tablet-14 fz--mobile-14">Contacts →</p>

        <ul className="contacts">
          <li className="contacts__item">
            <p className="body-text-2 contacts__name fz--mobile-10">For collaboration</p>
            <h6 className="fz--mobile-12">
              <LinkBtn classes="/" href="mailto:Loving.is.my.answer@gmail.com">
                Loving.is.my.answer@gmail.com
              </LinkBtn>
            </h6>
          </li>
          <li className="contacts__item">
            <p className="body-text-2 contacts__name fz--mobile-10">
              Telegram / iMessage / WhatsApp
            </p>
            <h6 className="fz--mobile-12">
              <LinkBtn classes="/" href="tel:+380993724505">
                +38 099 372 4505
              </LinkBtn>
            </h6>
          </li>
        </ul>

        <div className="socials">
          <p className="body-text-2 socials__title fz--mobile-10  ">Socials</p>
          <ul className="socials__list">
            <li className="socials__item">
              <LinkBtn
                target="_blank"
                classes="link-ul body-text-2 fz--tablet-14 fz--mobile-12"
                href="https://www.instagram.com/liubiashcheva__?igsh=dXpiMmYwbmF0djI5&utm_source=qr"
              >
                Instagram
              </LinkBtn>
            </li>
            <li className="socials__item">
              <LinkBtn target="_blank" classes="link-ul body-text-2 fz--tablet-14 fz--mobile-12" href="/#">
                YouTube
              </LinkBtn>
            </li>
            <li className="socials__item">
              <LinkBtn
                target="_blank"
                classes="link-ul body-text-2 fz--tablet-14 fz--mobile-12"
                href="https://t.me/liubiashcheva"
              >
                Telegram
              </LinkBtn>
            </li>
          </ul>
        </div>

        <div className="bottom">
          <div className="footer__ukraine">
            <p className="body-text-5 fz--mobile-8">Ukraine</p>
          </div>

          <p className="body-text-5 footer__rights" data-hide-for-mobile--flex>
            ©2024.{" "}
            <LinkBtn
              href="https://www.behance.net/horskyir"
              classes="link-ul"
              target="_blank"
            >
              Horskyi Design
            </LinkBtn>
            {". "}All rights reserved.
          </p>

          <a
            href="https://www.behance.net/horskyir"
            className="link__author"
            target="_blank"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 57 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.4725 0.164062H46.1252V0.998866H47.8264V4.88937H48.7714V0.998866H50.4725V0.164062Z"
                fill="white"
              />
              <path
                d="M56.7446 0.164062H55.3112L53.9724 3.83405L52.6178 0.164062H51.1687V4.88937H52.0823V1.15638L53.4526 4.88937H54.4607L55.831 1.15638V4.88937H56.7446V0.164062Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.1265 20.2119V14.979H8.44416V20.2119H0V4.88937H8.44416V10.1223H21.1265V4.88937L41.7029 4.89005C46.4865 4.83305 50.0386 8.36696 49.9997 12.5507C50.0386 16.7116 46.4865 20.2683 41.7029 20.2113L21.1265 20.2119ZM40.4325 15.355C42.1955 15.355 43.1937 14.0896 43.1937 12.5507C43.1937 11.0003 42.1955 9.74633 40.4325 9.74633H32.9913V15.355H40.4325Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
