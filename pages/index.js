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

      <main className=" md:flex ">
        <div className="w-full  md:w-3/5 ">
          <div className="m-3 ">
            <Search filteredData={theme} itemsPerPage={6} />
          </div>
        </div>

        {/* the lower part is responsive */}
        <div className=" flex w-full md:w-2/5 justify-center ">
          <div className="m-3 drop-shadow-md rounded-3xl bg-white p-4 md:w-5/6">
            <div className="mb-4 flex justify-center ">
              <Image src={Cardheading} alt="Picture of the author" />
            </div>
            <div className="">
              <p className="text-sm md:text-lg md:p-6">
                ZeroToOne, is a unique community started by IIITD E-Cell, to
                help students become entrepreneurs. It helps students in forming
                their idea from the scratch to the next level where they are
                ready to step into the big leagues.
              </p>
              <br />
              <p className="text-sm md:text-lg md:p-6">
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

      {/* <main className="">
        <div className="">
          <div>
            <Search filteredData={theme} itemsPerPage={6} />
          </div>
        </div>
        <div className=" w-2/5 m-6 h-max ">
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
      </main> */}
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};
