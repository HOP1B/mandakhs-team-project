import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e16] text-white">
      {/* Navigation */}
      <header className="flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <span className="text-xl font-bold text-[#00ff9d]">cs</span>
            <span className="text-xl font-bold text-white">gogogo</span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-sm font-medium text-white/80 hover:text-white">
                  TRADE
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-white/80 hover:text-white">
                  MARKET
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CSmoney-1677231686929-2CH4NRzvyGW3Ym7KvNfNhC2h31DJuc.webp"
                alt=""
                width={16}
                height={16}
                className="rounded-full"
              />
            </div>
            <ChevronDown className="h-4 w-4 text-white/60" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">$ USD</span>
            <ChevronDown className="h-4 w-4 text-white/60" />
          </div>
          <Button className="rounded-md bg-[#6c5dd3] px-4 py-2 text-sm font-medium text-white hover:bg-[#5a4dbd]">
            SIGN IN WITH STEAM
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-6">

            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                A better way
                <br />
                to trade
                <br />
                CS:GO skins
              </h1>
              <p className="max-w-md text-white/70">
                Buy, sell, and trade skins easier and faster. All deals are secured with the highest level protection
                methods.
              </p>
            </div>

            <div>
              <Button className="rounded-md bg-[#6c5dd3] px-8 py-3 text-base font-medium text-white hover:bg-[#5a4dbd]">
                TRY NOW
              </Button>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* AK-47 Neon Revolution */}
            <div className="absolute right-0 top-0 z-10">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="AK-47 Neon Revolution"
                  width={600}
                  height={300}
                  className="object-contain"
                />
                <div className="absolute left-0 top-1/2 flex -translate-y-1/2 flex-col items-start gap-1">
                  <span className="text-xs text-white/60">AK-47</span>
                  <span className="text-lg font-medium">Neon Revolution</span>
                </div>
              </div>
            </div>

            {/* Karambit Fade */}
            <div className="absolute bottom-0 right-1/4 z-0">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Karambit Fade"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                <div className="absolute left-0 top-1/2 flex -translate-y-1/2 flex-col items-start gap-1">
                  <span className="text-xs text-white/60">Karambit</span>
                  <span className="text-lg font-medium">Fade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-4">
          <div className="flex flex-col">
            <span className="text-3xl font-bold">35%</span>
            <span className="text-sm text-white/60">bonus for top up balance</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">80 K</span>
            <span className="text-sm text-white/60">CS:GO and Dota2 items on our website</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">30 sec</span>
            <span className="text-sm text-white/60">from logging in to making a purchase</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">24/7</span>
            <span className="text-sm text-white/60">online support, response time less than 5 minutes</span>
          </div>
        </div>
      </main>
    </div>
  )
}

