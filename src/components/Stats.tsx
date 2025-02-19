import type { Skin } from "@/lib/data"

type StatsProps = {
  stats: {
    casesOpened: number
    moneySpent: number
    bestDrop: Skin | null
  }
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="mt-8 w-full bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-lg font-semibold">Cases Opened</p>
          <p className="text-2xl">{stats.casesOpened}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Money Spent</p>
          <p className="text-2xl">${stats.moneySpent.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Best Drop</p>
          {stats.bestDrop ? (
            <p className="text-2xl">
              {stats.bestDrop.name} (${stats.bestDrop.value.toFixed(2)})
            </p>
          ) : (
            <p className="text-2xl">-</p>
          )}
        </div>
      </div>
    </div>
  )
}

