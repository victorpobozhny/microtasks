import styled from "styled-components";
//styled-components
// & - батя

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {            // дети элемента NavWrapper будут иметь такие стили
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`


   const Header = styled.div` 
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const Body = styled.body `
    display: flex;
`

const Nav = styled.nav `
  background-color: #dbbbbb;
  min-height: 400px;
  width: 30%;
  color: #282c34;
  font-size: 30px;

`

const Content = styled.div`
    background-color:#282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`

const Footer = styled.footer `
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`

export const s = {
    NavWrapper, Nav, Header, Footer, Body, Content
}
