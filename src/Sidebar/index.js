import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/Logo_Squere.png";
import Home from "../assets/Home.svg";
import Team from "../assets/Team.svg";
import Calendar from "../assets/Calendar.svg";
import Projects from "../assets/Projects.svg";
import Documents from "../assets/Documents.svg";
import PowerOff from "../assets/Power-Off-Solid.svg";

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;
const Button = styled.button`
  background-color: #000;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: #fff;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
const SidebarContainer = styled.div`
  background-color: #000;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Slickbar = styled.ul`
  color: #fff;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;

  padding: 2rem 0;

  position: absolute;
  top: 10rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;
const Item = styled.li`
  text-decoration: none;
  color: #fff;
  width: 100%;
  padding: 1rem 0;

  cursor: pointer;
  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid #fff;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;
const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;
const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;

  padding: 0.5rem 1rem;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: #000;
  color: #fff;

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;
const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.div`
  padding: 0 1.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Logout = styled.div`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(103%) contrast(103%);

    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);

  const [profileClick, setProfileClick] = useState(false);
  const profileClickHandler = () => setProfileClick(!profileClick);
  return (
    <div>
      <Button clicked={click} onClick={() => clickHandler()}>
        click
      </Button>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Slickbar clicked={click}>
          <Item>
            <img src={Home} alt="Home" />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item>
            <img src={Team} alt="Team" />
            <Text clicked={click}>Team</Text>
          </Item>
          <Item>
            <img src={Calendar} alt="Calendar" />
            <Text clicked={click}>Calendar</Text>
          </Item>
          <Item>
            <img src={Projects} alt="Projects" />
            <Text clicked={click}>Projects</Text>
          </Item>
          <Item>
            <img src={Documents} alt="Documents" />
            <Text clicked={click}>Documents</Text>
          </Item>
        </Slickbar>
        <Profile clicked={profileClick}>
          <img
            onClick={() => profileClickHandler()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>John Doe</h4>
              <a href="/#">View profile</a>
            </Name>

            <Logout>
              <img src={PowerOff} alt="Logout" />
            </Logout>
          </Details>
        </Profile>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
