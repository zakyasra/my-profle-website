import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Layout = ({ children }) => {
  const navMenus = [
    {
      nama: "About",
      link: "/about"
    },
    {
      nama: "My Skills",
      link: "/skills"
    },
    {
      nama: "Projects",
      link: "/portfolio"
    },
    {
      nama: "Contact",
      link: "/contact"
    }
  ];

  return (
    <section className="d-lg-flex d-none">
      <div className="sidenavbar">
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: "100%" }}
        >
          <Link href={"/"}>
            <div
              style={{
                background: "#000",
                minHeight: "160px",
                cursor: "pointer"
              }}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <img src="/assets/z-logo-names.svg" />
              <p
                className="fs-10 text-neutral-40 fw-400 my-3"
                style={{
                  fontFamily: "Times New Roman",
                  letterSpacing: "0.6px"
                }}
              >
                Web Developer
              </p>
            </div>
          </Link>
          <nav>
            <ul>
              {navMenus?.map((d) => {
                return (
                  <Link href={d?.link}>
                    <li>{d?.nama}</li>
                  </Link>
                );
              })}
            </ul>
          </nav>
          <div
            className="d-flex align-items-center justify-content-center gap-2 text-neutral-80"
            style={{ marginBottom: "10rem", cursor: "pointer" }}
          >
            <a
              className="text-danger-main-hover"
              href="https://www.linkedin.com/in/zaky-asra-1601a7256/"
              target="_blank"
            >
              <FaLinkedinIn className="text-danger-main-hover" />
            </a>
            <a
              className="text-danger-main-hover"
              href="https://github.com/zakyasra"
              target="_blank"
            >
              <FaGithub className="text-danger-main-hover" />
            </a>
            <a
              className="text-danger-main-hover"
              href="https://www.instagram.com/zzaky22_"
              target="_blank"
            >
              <FaInstagram className="text-danger-main-hover" />
            </a>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "130px" }} className="flex-grow-1">
        {children}
      </div>
    </section>
  );
};

export default Layout;
