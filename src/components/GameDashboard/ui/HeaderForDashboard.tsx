import { ChevronsUpDown } from 'lucide-react'

const HeaderForDashboard = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <button
          type="button"
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] justify-between"
        >
          <span>내전날짜</span>
          <ChevronsUpDown
            width="15"
            height="15"
            className="ml-auto h-4 w-4 shrink-0 opacity-50"
          />
        </button>
      </div>
    </div>
  )
}

export default HeaderForDashboard
