import { Interfaces } from '@/utils'
import GameSwitcher from '../elements/GameSwitcher'

// const mockNavArr = ['overview', 'records', 'paricipants']
interface HeaderForDashboardProps {
  guildId: string
  games: Interfaces.GamesOfGuild
}
const HeaderForDashboard = ({ games, guildId }: HeaderForDashboardProps) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <GameSwitcher games={games} guildId={guildId} />
        {/* <button
          type="button"
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] justify-between"
        >
          <span>내전날짜</span>
          <ChevronsUpDown
            width="15"
            height="15"
            className="ml-auto h-4 w-4 shrink-0 opacity-50"
          />
        </button> */}
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          {/* {mockNavArr.map((el, idx) => (
            <a key={idx} href="/guilds/1234">
              {el}
            </a>
          ))} */}
        </nav>
        {/* <div className="ml-auto flex items-center space-x-4">
          <div className="border">hi</div>
        </div> */}
      </div>
    </div>
  )
}

export default HeaderForDashboard
