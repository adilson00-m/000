import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DarkMia | VIP Premium Platform</title>
      </Head>

      <main className="min-h-screen bg-black text-white">
        <header className="p-6 border-b border-zinc-800">
          <div className="text-xl font-bold">DarkMia 🔥</div>
        </header>

        <section className="text-center py-24">
          <h1 className="text-5xl font-bold">Exclusive VIP Content</h1>
          <p className="text-zinc-400 mt-4">
            Secure premium platform with subscription access.
          </p>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-8">VIP Membership</h2>

          <a
            href="/api/stripe/checkout"
            className="bg-pink-600 px-6 py-3 rounded-xl font-bold"
          >
            Subscribe Securely
          </a>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold">Live VIP Cams 🔴</h2>
        </section>

        <footer className="border-t border-zinc-800 text-center py-6 text-zinc-500">
          © 2026 DarkMia
        </footer>
      </main>
    </>
  );
}
