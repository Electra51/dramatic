"use client";

import React, { useState } from "react";
import {
  LogoContainer,
  Nav,
  NavLinkContainer,
  SearchBar,
  SearchContent,
  Avatar,
  Dot,
  MenuIcon,
  OverlayMenu,
  CloseButtonContainer,
  CloseIcon,
  MenuLinkContainer,
  NavRightContainer,
  NavLeftContainer,
  MobileIcon,
} from "./NavElements";
import Image from "next/image";
import LogoImage from "../../public/assets/images/logo.png";
import profile from "../../public/assets/images/profile.png";
import NavLink from "./NavLink";
import { AiOutlineGift, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <Nav>
      <LogoContainer>
        <Image src={LogoImage} alt="logo" width={160} height={47} />
      </LogoContainer>
      <MobileIcon>
        <MenuIcon size={30} onClick={openMenu} />
      </MobileIcon>
      <NavLinkContainer>
        <NavLeftContainer>
          <NavLink route="/">
            Home
            <span className="dot"></span>
          </NavLink>
          <NavLink route="/tvShow">
            TV Show
            <span className="dot"></span>
          </NavLink>
          <NavLink route="/movies">
            Movies
            <span className="dot"></span>
          </NavLink>
          <NavLink route="/new">
            New
            <span className="dot"></span>
          </NavLink>
        </NavLeftContainer>
        <NavRightContainer>
          <SearchContent>
            <SearchBar type="search" placeholder="SEARCH" />
            <AiOutlineSearch
              style={{
                position: "absolute",
                right: "8px",
                top: "6px",
                color: "white",
              }}
            />
          </SearchContent>
          <AiOutlineGift color="white" fontSize="23px" />
          <MdOutlineNotifications color="white" fontSize="23px" />
          <Avatar>
            <Image src={profile} alt="logo" width={30} height={30} />
            <Dot></Dot>
          </Avatar>
        </NavRightContainer>
      </NavLinkContainer>

      {showMenu && (
        <OverlayMenu>
          <CloseButtonContainer>
            <CloseIcon size={40} color={"white"} onClick={closeMenu} />
          </CloseButtonContainer>
          <MenuLinkContainer>
            <NavLink route="/" onClick={closeMenu}>
              Home
              <span className="dot"></span>
            </NavLink>
            <NavLink route="/tvShow" onClick={closeMenu}>
              TV Show
              <span className="dot"></span>
            </NavLink>
            <NavLink route="/movies" onClick={closeMenu}>
              Movies
              <span className="dot"></span>
            </NavLink>
            <NavLink route="/new" onClick={closeMenu}>
              New
              <span className="dot"></span>
            </NavLink>
            <SearchContent>
              <SearchBar type="search" placeholder="SEARCH" />
              <AiOutlineSearch
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "6px",
                  color: "white",
                }}
              />
            </SearchContent>
            <AiOutlineGift color="white" fontSize="23px" />
            <MdOutlineNotifications color="white" fontSize="23px" />
            <Avatar>
              <Image src={profile} alt="logo" width={30} height={30} />
              <Dot></Dot>
            </Avatar>
          </MenuLinkContainer>
        </OverlayMenu>
      )}
    </Nav>
  );
};

export default Navbar;
