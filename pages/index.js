import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const index = () => {
  const listCutomer = [
    {
      src: "/assets/logo-customer/1.svg"
    },
    {
      src: "/assets/logo-customer/2.svg"
    },
    {
      src: "/assets/logo-customer/3.svg"
    },
    {
      src: "/assets/logo-customer/4.svg"
    },
    {
      src: "/assets/logo-customer/5.svg"
    },
    {
      src: "/assets/logo-customer/6.svg"
    },
    {
      src: "/assets/logo-customer/7.svg"
    },
    {
      src: "/assets/logo-customer/8.svg"
    },
    {
      src: "/assets/logo-customer/9.svg"
    },
    {
      src: "/assets/logo-customer/10.svg"
    },
    {
      src: "/assets/logo-customer/11.svg"
    },
    {
      src: "/assets/logo-customer/12.svg"
    },
    {
      src: "/assets/logo-customer/13.svg"
    },
    {
      src: "/assets/logo-customer/14.svg"
    },
    {
      src: "/assets/logo-customer/15.svg"
    }
  ];

  const cardVariants = {
    offscreen: {
      y: 150
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const serviceListTransition = {
    offscreen: {
      x: 700
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const serviceListTransition2 = {
    offscreen: {
      x: -700
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const delayTransition = {
    hidden: { opacity: 0, transition: 0.5 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        delay: 0.7
      }
    }
  };

  return (
    <Layout>
      <div className="position-relative">
        <div className="bubbles position-relative d-flex">
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 23 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 16 }}></span>
          <span style={{ "--i": 19 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 22 }}></span>
          <span style={{ "--i": 25 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 21 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 26 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 28 }}></span>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 23 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 16 }}></span>
          <span style={{ "--i": 19 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 22 }}></span>
          <span style={{ "--i": 25 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 21 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 26 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 28 }}></span>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 23 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 16 }}></span>
          <span style={{ "--i": 19 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 22 }}></span>
          <span style={{ "--i": 25 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 21 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 26 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 28 }}></span>
        </div>
      </div>
      <div
        className="d-flex align-items-center position-relative"
        style={{ height: "100vh" }}
      >
        <div className="bubbles"></div>
        <div className="padding-kiri-kanan">
          <div className="fw-700 text-white fs-90">
            <div
              style={{
                lineHeight: ".9",
                fontFamily: "PT Sans, sans-serif"
              }}
              className="d-flex"
            >
              <div className="bounce-item bounce-2 text-danger-main-hover">
                H
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                i
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                ,
              </div>
            </div>
            <div
              style={{
                lineHeight: ".9",
                fontFamily: "PT Sans, sans-serif"
              }}
              className="d-flex"
            >
              <div className="bounce-item bounce-2 text-danger-main-hover">
                I
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                '
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                m
              </div>
              <div className="me-4"></div>
              <div
                className="text-danger-hover"
                style={{ textShadow: "-7px 0 #51d868" }}
              >
                Z
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                a
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                k
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                y
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                ,
              </div>
            </div>
            <div
              style={{
                lineHeight: ".9",
                fontFamily: "PT Sans, sans-serif"
              }}
              className="d-flex"
            >
              <div className="bounce-item bounce-2 text-danger-main-hover">
                w
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                e
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                b
              </div>
              <div className="me-4"></div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                d
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                e
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                v
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                e
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                l
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                o
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                p
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                e
              </div>
              <div className="bounce-item bounce-2 text-danger-main-hover">
                r
              </div>
            </div>
          </div>
          <div
            style={{ letterSpacing: "8px", marginTop: "40px" }}
            className="text-neutral-70 fs-16"
          >
            Front End Developer
          </div>
          <button
            className="btn-lg btn-outline-primary-main"
            style={{ marginTop: "60px", letterSpacing: "3px" }}
          >
            Contact Me!
          </button>
        </div>{" "}
        <div
          className="text-white fs-12 position-absolute bounce-items bounce"
          style={{ right: "-25px", bottom: "60px" }}
        >
          scroll down
        </div>
        <div className="text-neutral-70 position-absolute bottom-0 mb-2 end-0">
          <FaArrowDown />
        </div>
      </div>
    </Layout>
  );
};

export default index;
