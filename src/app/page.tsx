import { FeaturedSpinner } from "@/app/components/FeaturedSpinner";
import { Footer } from "@/app/components/layout/Footer";
import { LiveDrops } from "@/app/components/LiveDrops";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b  text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5 z-0"></div>
      <main className="container mx-auto px-4 py-8 relative z-10">
        <section className="mb-12"></section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Featured Spinner
            </h2>
          </div>
          <FeaturedSpinner />
        </section>

        <div className="gap-8 mb-12">
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400">
                Live Drops
              </h2>
              <span className="text-sm text-green-400 animate-pulse">
                ● LIVE
              </span>
            </div>
            <LiveDrops />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
