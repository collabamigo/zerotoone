import React, { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Projectcard from "../../components/Projectcard";
import Cardheading from "../../public/assets/svg/Cardheading.svg";
import Search from "../../components/Search";
import Mainlayout, { Cardstoshow } from "../../common/Mainlayout";

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
        <div className=" w-full m-6 h-max">
          <div>
            <Search filteredData={theme} itemsPerPage={9}  />
          </div>
        </div>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Mainlayout>{page}</Mainlayout>;
};
