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
      <div className="d-flex align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-6">
          <div className="padding-kiri-kanan">
            <div className="fw-700 text-danger-hover fs-60">
              <div
                style={{
                  lineHeight: ".9",
                  fontFamily: "Poppins, sans-serif"
                }}
                className="d-flex"
              >
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  M
                </div>
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  y
                </div>
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  ,
                </div>
                <div className="me-3"></div>
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  M
                </div>
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  y
                </div>
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  s
                </div>
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  e
                </div>
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  l
                </div>
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  f
                </div>
                <div className="me-3"></div>
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  &
                </div>
                <div className="me-3"></div>
                <div className="bounce-item bounce-2 text-danger-main-hover">
                  I
                </div>
              </div>
            </div>
            <div
              style={{ marginTop: "40px" }}
              className="ps-2 text-white fs-12"
            >
              Saya adalah seorang Front End Developer yang bertempat tinggal di
              Indonesia. Mempunyai <i>passion</i> untuk membuat tampilan website
              dengan animasi-animasi yang menarik dan kreatif, serta membuat
              website tersebut bekerja dinamis sesuai sistem.
              <br />
              <br />
              lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
              dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
              ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
              ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor
              sit amet
              <br />
              <br />
              Tertarik dengan berbagai project web developer terutama di bagian
              frontend dan dapat bekerja sama dengan <i>positive people</i>.
            </div>
          </div>
        </div>
        <div className="text-white col-md-6">tes</div>
      </div>
    </Layout>
  );
};

export default index;
