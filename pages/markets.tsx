import type { NextPage } from 'next'
import { Nav } from '../components/nav'
import { Card } from '../components/cardWager'
import { Announcement } from '../components/announcement'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from "react";
import axios from "axios";
import { RepeatOneSharp } from "@mui/icons-material";
import { Skeleton } from "@mui/material";


const Markets: NextPage = () => {

  const options = {
    method: "GET",
    url: "https://7004dufqxk.execute-api.us-east-1.amazonaws.com/v2/sneakers?limit=10&brand=adidas&name=yeezy-350&gender=men",
};

const [response, setResponse] = useState([]);

// fetch sneaker data
const getSneaker = async () => {
    axios
        .request(options)
        .then(function (response) {
            setResponse(response.data.results);
            console.log(response.data.results);
        })
        .catch(function (error) {
            console.error(error);
        });
};

useEffect(() => {
    getSneaker();
}, []);

  return (

    //#F5DEB3 - Vanilla
    //#E5E5E5 - Gray
    
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-lime-400 via-gray-100 to-white">
      <Head>
        <title>Xsauce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col text-center">
      <Announcement/>
       <Nav/>
       
       <h1 className='text-[25px] font-semibold p-4'>Markets</h1>
       <div className="sm:w-full px-[20px]">
        <div className="flex w-full flex-1 flex-col space-y-4">

          {response.map(el => (
            <Card cardObject={el}/>
            ))
          }

       </div>

       </div>
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

export default Markets
