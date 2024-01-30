export interface Member {
  gameUsername: string
  joinedAt: string
  user: string
  avatar: string
  acs: string
  tier: string
}

export interface Game {
  createdBy: string
  date: string
  gameId: string
  isActive: boolean
  members: Member[]
  roundInfo: RoundInfo
}

export interface RoundInterface {
  allMembers?: Member[]
  teamA: Member[]
  teamB: Member[]
  avgAcsTeamA: number
  avgAcsTeamB: number
  hasSelected?: boolean
  map?: string
  isSaved?: boolean
}

export interface GamesOfGuild {
  [key: string]: Game
}

export interface RoundInfo {
  [key: string]: RoundInterface
}

export interface GuildData {
  games: GamesOfGuild
  id: string
  isActive: boolean
  joinedAt: string
  name: string
}

export interface GameDataResponse {
  data: never[]
  error?: undefined
}
