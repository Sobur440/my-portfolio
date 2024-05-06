import React from "react";
import Head from "next/head";

function Home() {
  return (
    <main className="container mx-auto px-4 py-8 bg-gray-900 text-white">
      <Head>
        <title>Under Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-teal-300">Under Development</h1>
        <p className="text-lg text-gray-300 mt-2">
          The site is currently under construction. Please check out some of my
          other projects in the meantime.
        </p>
      </header>

      <section aria-labelledby="projects-heading" className="mb-12">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2
            id="projects-heading"
            className="text-2xl font-semibold text-teal-200"
          >
            Projects:
          </h2>
          <ul className="list-none mt-4 space-y-4">
            <li>
              <a
                href="https://monsur.vercel.app"
                className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mazinger&apos;s Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://zeenaah.vercel.app"
                className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zeenah
              </a>
            </li>
            <li>
              <a
                href="https://anaas.vercel.app/"
                className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anas Crypto Worldsmith
              </a>
            </li>
            <li>
              <a
                href="https://covidvirus.vercel.app"
                className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Covid 19 Awareness
              </a>
            </li>
          </ul>
          <p className="italic text-gray-400">and more...</p>
        </div>
      </section>

      <section aria-labelledby="contact-heading" className="mb-12">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2
            id="contact-heading"
            className="text-2xl font-semibold text-teal-200"
          >
            Contact Me:
          </h2>
          <div className="space-y-4 mt-4">
            <p>
              Twitter/X:{" "}
              <a
                href="https://twitter.com/Wave440"
                className="text-blue-300 hover:text-blue-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wave440
              </a>
            </p>
            <p>
              Github:{" "}
              <a
                href="https://github.com/Sobur440"
                className="text-blue-300 hover:text-blue-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sobur440
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/sobur-abubakar-835b6b246/"
                className="text-blue-300 hover:text-blue-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sobur Abubakar
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:abubakarsobur440@gmail.com"
                className="text-blue-300 hover:text-blue-500 transition-colors duration-300"
              >
                abubakarsobur440@gmail.com
              </a>
            </p>
            <p>Send me a friend request on Discord: halaluchiha</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
