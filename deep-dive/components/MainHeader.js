import NavLink from './NavLink'

export default function MainHeader() {
  return (
    <div id="main-header">
      <ul>
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/news">NEWS</NavLink>
        <NavLink href="/archive">ARCHIVE</NavLink>
      </ul>
    </div>
  )
}
