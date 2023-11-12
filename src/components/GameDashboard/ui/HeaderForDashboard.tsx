import HeaderNav from '../elements/HeaderNav'

const HeaderForDashboard = ({ guildId }: { guildId: string }) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <HeaderNav guildId={guildId} />
      </div>
    </div>
  )
}

export default HeaderForDashboard
