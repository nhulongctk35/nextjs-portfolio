function Sidebar({
  side = 'left',
  className = '',
  children,
}: {
  side: 'left' | 'right'
  className?: string
  children: React.ReactNode
}) {
  return (
    <aside
      className={`fixed bottom-0 flex-col items-center hidden md:flex ${className} ${
        side === 'left' ? 'left-6 xl:left-12' : 'right-6 xl:right-12'
      }`}
    >
      {children}
      <div className="bg-slate-500 h-24 w-0.5 mt-5"></div>
    </aside>
  )
}

const SidebarLinks = () => {
  return (
    <Sidebar side="left">
      <ul>
        {socialLinks.map(({ icon, url }) => (
          <li key={url}>
            <a
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              className={`block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200`}
            >
              {/* <Icon icon={icon} width={24} height={24} /> */}
            </a>
          </li>
        ))}
      </ul>
    </Sidebar>
  )
}

export default SidebarLinks
