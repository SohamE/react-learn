// props children are passed inside the component.
const Header = ({ children }) => (
  <header>
    <h1>{children}</h1>
  </header>
)

export default Header;