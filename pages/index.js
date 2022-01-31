import React, { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Projectcard from "../components/Projectcard";
import Cardheading from "../public/assets/svg/Cardheading.svg";
import Search from "../components/Search";
import Mainlayout, { Cardstoshow } from "../common/Mainlayout";

export default function Home() {
  const theme = useContext(Cardstoshow);
  return (
    <div className=" bg-sky-50 p-0">
      <Head>
        <title>Zero2One</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex  h-max ">
        <div className=" w-3/5 m-6 h-max">
          <div>
            <Search filteredData={theme} />
          </div>
        </div>
        <div className=" w-2/5 m-6 h-max  ">
          <div className=" drop-shadow-md rounded-xl bg-white p-4">
            <div className="">
              <Image src={Cardheading} alt="Picture of the author" />
            </div>
            <div className="mt-12">
              <p className="text-xl pt-5 pr-5 pb-5">
                ZeroToOne, is a unique community started by IIITD E-Cell, to
                help students become entrepreneurs. It helps students in forming
                their idea from the scratch to the next level where they are
                ready to step into the big leagues.
              </p>
              <p className="text-xl pt-5 pr-5 pb-5">
                Guidlines and other Information, Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry&apos;s standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};
