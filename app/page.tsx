import Image from "next/image";
import { offers } from "./data/offers";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#c91414] via-[#e62222] to-[#7a0d0d] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
              <Image
                src="/logo.png"
                alt="DrinkyOfertas"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-2xl font-black">DrinkyOfertas</h1>
              <p className="text-sm text-white/70">Sua dose de descontos</p>
            </div>
          </div>

          <button className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#e62222]">
            Entrar no Telegram
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-5xl font-black md:text-7xl">
          O maior hub de promoções de bebidas
        </h2>

        <p className="mt-6 text-white/80">
          Ofertas de cervejas, whisky, vinhos e churrasco em um só lugar.
        </p>
      </section>

      {/* OFERTAS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-10 text-4xl font-black">
          Ofertas em destaque
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {offers.map((offer) => (
            <div
              key={offer.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/10"
            >

              <div className="relative h-64 w-full">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black">
                  {offer.title}
                </h3>

                <p className="mt-2 text-white/70">
                  {offer.description}
                </p>

                <div className="mt-4 flex items-end gap-3">
                  <span className="text-3xl font-black">
                    {offer.newPrice}
                  </span>

                  <span className="text-white/50 line-through">
                    {offer.oldPrice}
                  </span>
                </div>

                <a
                  href={offer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block rounded-xl bg-white py-3 text-center font-black text-[#e62222]"
                >
                  Ver promoção
                </a>

              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}