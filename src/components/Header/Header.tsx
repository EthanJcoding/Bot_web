const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">hi</div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          hello
        </div>
      </div>
    </header>
  )
}

export default Header
