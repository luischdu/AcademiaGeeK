import React from "react";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 9px;
`;

const ImgLogoStyle = styled.img`
  width: 26.5%;
`;

const DivEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  gap: 6px;
`;

const Navbar = (props) => {
    const { history } = props;
  return (
    <div>
      <HeaderStyle>
        <ImgLogoStyle src="https://i.imgur.com/8aAwol7.png" alt="logo" />{" "}
        <DivEnd>
          <FontAwesomeIcon
            onClick={() => history.push("/carrito")}
            icon={faShoppingCart}
          />
          <FontAwesomeIcon
            onClick={() => history.push("/login")}
            icon={faUser}
          />
        </DivEnd>
      </HeaderStyle>
    </div>
  );
};

export default withRouter(Navbar);
