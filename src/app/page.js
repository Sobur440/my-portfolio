function Home() {
  return (
    <main className="container mx-auto px-4">
      <section className="my-8">
        <h1 className="text-2xl font-bold">Under Development</h1>
        <p className="text-lg">
          The site is currently under construction. Check out some of my other
          projects in the meantime:
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-semibold">Projects:</h2>
        <ul className="list-none space-y-2">
          <li>
            <a
              href="https://monsur.vercel.app"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
            >
              Mazinger's Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://zeenaah.vercel.app"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
            >
              Zeenah
            </a>
          </li>
          <li>
            <a
              href="https://anaas.vercel.app/"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
            >
              Anas Crypto Worldsmith
            </a>
          </li>
          <li>
            <a
              href="https://covidvirus.vercel.app"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
            >
              Covid 19
            </a>
          </li>
        </ul>
        <p className="italic">and more...</p>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-semibold">Contact Me:</h2>
        <div className="space-y-2">
          <p>
            Twitter/X:{" "}
            <a
              href="https://twitter.com/Wave440"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
            >
              Wave440
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sobur-abubakar-835b6b246/"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
            >
              Sobur Abubakar
            </a>
          </p>
          <p>Send me a friend request on Discord: halaluchiha</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
