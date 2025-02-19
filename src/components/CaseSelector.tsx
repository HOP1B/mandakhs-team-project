import Image from "next/image"
import type { Case } from "@/lib/data"

type CaseSelectorProps = {
  cases: Case[]
  selectedCase: Case
  onSelectCase: (caseItem: Case) => void
}

export default function CaseSelector({ cases, selectedCase, onSelectCase }: CaseSelectorProps) {
  return (
    <div className="flex gap-4 mb-8">
      {cases.map((caseItem) => (
        <button
          key={caseItem.id}
          onClick={() => onSelectCase(caseItem)}
          className={`p-2 rounded-lg transition-colors ${
            selectedCase.id === caseItem.id ? "bg-yellow-500" : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          <Image
            src={caseItem.image || "/placeholder.svg"}
            alt={caseItem.name}
            width={100}
            height={100}
            className="rounded-lg"
          />
          <p className="mt-2 text-sm font-bold">{caseItem.name}</p>
          <p className="text-xs">${caseItem.price}</p>
        </button>
      ))}
    </div>
  )
}

