import React from "react";

import { MdPhone, MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

import "./header.styles.scss";

const Header = () => (
  <div className="global">
    <div className="header">
      <div className="logo-container">
        <img src={require("../../assets/logo_black.png")} alt="logo" />
      </div>
    </div>

    <div className="header-text">
      <div className="text">
        <span>
          <b>Designer Parelelo</b> é uma empresa com foco na satisfação criativa
          do cliente, entregando conteúdo visual no mais alto nível de
          qualidade.
        </span>
      </div>
      <div className="instagram">
        <FaInstagram size={24} />
        <span>
          <a
            href="https://www.instagram.com/designerparalelooficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nosso Instagram
          </a>
        </span>
      </div>
      <div className="phone">
        <MdPhone size={24} />
        <span>(61) 99208-6871</span>
      </div>
      <div className="email">
        <MdEmail size={24} />
        <a href="mailto:designerparalelooficial@gmail.com">
          designerparalelooficial@gmail.com
        </a>
      </div>
    </div>
  </div>
);

export default Header;
