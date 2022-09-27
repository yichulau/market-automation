import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import TechnologyCard from "../components/TechnologyCard";
import LandingPage from "../components/homepage/LandingPage";
import { useRouter } from "next/router";
import Dashboard from "./workflow/dashboard";
import NavBar from "../components/NavBar";

import AdminLayout from "../components/admin/Layout/AdminLayout";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const router = useRouter()
  const showHeader = router.pathname === '/auth/signin' || router.pathname === '/auth/signup' ? false : true;
  const checkPages = router.pathname === '/' ? true : false;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showHeader && <NavBar />}
      {checkPages && <LandingPage /> }

      
      {/* <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 ">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h1>
        <p className="text-2xl text-gray-700">This stack uses:</p>
        
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard
            name="NextJS"
            description="The React framework for production"
            documentation="https://nextjs.org/"
          />
          <TechnologyCard
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
            documentation="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="TailwindCSS"
            description="Rapidly build modern websites without ever leaving your HTML"
            documentation="https://tailwindcss.com/"
          />
          <TechnologyCard
            name="tRPC"
            description="End-to-end typesafe APIs made easy"
            documentation="https://trpc.io/"
          />
          <TechnologyCard
            name="Next-Auth"
            description="Authentication for Next.js"
            documentation="https://next-auth.js.org/"
          />
          <TechnologyCard
            name="Prisma"
            description="Build data-driven JavaScript & TypeScript apps in less time"
            documentation="https://www.prisma.io/docs/"
          />
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main> */}
    </>
  );
};

export default Home;
