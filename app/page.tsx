import Image from "next/image";
import Link from "next/link";

const bikes = [
  {
    name: "Aurora City",
    tag: "Daily commuter",
    price: "From $1,849",
    accent: "from-amber-500/20 to-orange-600/10",
    src: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900&q=85",
    alt: "Minimal city bicycle against a wall",
  },
  {
    name: "Drift Gravel",
    tag: "Weekend escape",
    price: "From $2,299",
    accent: "from-emerald-500/20 to-teal-600/10",
    src: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=900&q=85",
    alt: "Gravel bike on a forest path",
  },
  {
    name: "Pulse E-Urban",
    tag: "Assist when you need it",
    price: "From $3,199",
    accent: "from-violet-500/20 to-fuchsia-600/10",
    src: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Electric urban bicycle",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.2em] text-white uppercase"
          >
            Veloce
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <Link href="#bikes" className="transition hover:text-white">
              Bikes
            </Link>
            <Link href="#craft" className="transition hover:text-white">
              Craft
            </Link>
            <Link href="#stories" className="transition hover:text-white">
              Stories
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden text-sm text-zinc-400 transition hover:text-white sm:block"
            >
              Sign in
            </button>
            <button
              type="button"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Configure
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/5">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.35),transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-medium tracking-[0.25em] text-orange-400 uppercase">
                Spring collection
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Bikes that feel{" "}
                <span className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                  fast on purpose
                </span>
                .
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Hand-finished frames, confident geometry, and components chosen
                for real streets—not spec sheets. Built in small batches, shipped
                ready to ride.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-orange-500/25 transition hover:bg-orange-400"
                >
                  Shop the line
                </button>
                <button
                  type="button"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  Book a fit session
                </button>
              </div>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
                <div>
                  <dt className="text-xs text-zinc-500 uppercase">Riders</dt>
                  <dd className="mt-1 text-2xl font-semibold tabular-nums text-white">
                    48k+
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500 uppercase">Avg. build</dt>
                  <dd className="mt-1 text-2xl font-semibold tabular-nums text-white">
                    11 lbs
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500 uppercase">Warranty</dt>
                  <dd className="mt-1 text-2xl font-semibold tabular-nums text-white">
                    5 yr
                  </dd>
                </div>
              </dl>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none lg:aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/80 ring-1 ring-white/10" />
              <Image
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1000&q=85"
                alt="Cyclist riding a road bike at golden hour"
                fill
                priority
                className="rounded-3xl object-cover mix-blend-luminosity"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm text-zinc-300">
                <span className="font-medium text-white">Torino steel</span> —
                lugged construction, painted in-house. Each frame numbered.
              </p>
            </div>
          </div>
        </section>

        <section
          id="craft"
          className="border-b border-white/5 bg-zinc-900/30 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Craft you can see from across the café
              </h2>
              <p className="mt-4 text-zinc-400">
                We obsess over tubing, weld cleanliness, and paint depth so your
                bike looks as good on day 800 as day one.
              </p>
            </div>
            <ul className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Geometry first",
                  body: "Stable at speed, lively in corners. Sized with real rider data, not generic charts.",
                },
                {
                  title: "Quiet running",
                  body: "Ceramic where it matters, tensioned wheels, and housings routed for zero rattle.",
                },
                {
                  title: "Service friendly",
                  body: "Standard parts, documented builds, and shops worldwide that know our stack.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 shadow-xl shadow-black/20"
                >
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="bikes" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Featured builds
                </h2>
                <p className="mt-2 max-w-lg text-zinc-400">
                  Start with a complete bike or swap bars, ratios, and finishes
                  in our configurator.
                </p>
              </div>
              <Link
                href="#"
                className="text-sm font-medium text-orange-400 transition hover:text-orange-300"
              >
                View all models →
              </Link>
            </div>

            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {bikes.map((bike) => (
                <li key={bike.name}>
                  <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 transition hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10">
                    <div
                      className={`relative aspect-[4/3] bg-gradient-to-br ${bike.accent}`}
                    >
                      <Image
                        src={bike.src}
                        alt={bike.alt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-80" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-medium tracking-wide text-orange-400 uppercase">
                        {bike.tag}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {bike.name}
                      </h3>
                      <p className="mt-3 text-sm text-zinc-400">{bike.price}</p>
                      <button
                        type="button"
                        className="mt-4 w-full rounded-xl border border-white/15 py-2.5 text-sm font-medium text-white transition group-hover:border-orange-500/50 group-hover:bg-orange-500/10"
                      >
                        Customize
                      </button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="stories"
          className="border-t border-white/5 bg-gradient-to-b from-zinc-900/40 to-zinc-950 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="text-xl font-light leading-relaxed text-zinc-200 sm:text-2xl">
                “I stopped thinking about my bike and started thinking about
                where I was going. That’s the whole point.”
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="font-medium text-white">Maya Chen</span>
                  <span className="text-zinc-500"> — product designer, NYC</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="border-t border-white/5 py-16 sm:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                First tune on us
              </h2>
              <p className="mt-2 max-w-md text-zinc-400">
                Join the list for drops, ride maps, and shop events near you.
              </p>
            </div>
            <form
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              action="#"
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-white/15 bg-zinc-900/80 px-5 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-orange-500/0 transition focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/30"
              />
              <button
                type="button"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-zinc-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-sm text-zinc-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Veloce Cycles. Demo landing page.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-zinc-300">
              Terms
            </Link>
            <Link href="#" className="transition hover:text-zinc-300">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
