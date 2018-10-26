import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const isCurrent = (anchor, pathname) => (
  pathname.endsWith(anchor)
  ? 'current'
  : ''
)
class Navigation extends React.Component {
  state = {
    pathname: '#home'
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({pathname: window.location.href});
    })
  }

  

  render() {
    const { pathname = '' } = this.state
    return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className={isCurrent('#home', pathname)}>
        <AnchorLink href='#home'>Home</AnchorLink>
        </li>
        <li className={isCurrent('#about', pathname)}>
        <AnchorLink href='#about'>O Mnie</AnchorLink>
        </li>
        <li className={isCurrent('#resume', pathname)}>
        <AnchorLink href='#resume'>Umiejętności</AnchorLink>
        </li>
        {/* <li className={isCurrent('#portfolio', pathname)}>
          <a className="smoothscroll" href="#portfolio">
            Praca
          </a>
        </li> */}
        <li className={isCurrent('#testimonials', pathname)}>
         
          <AnchorLink className="smoothscroll" href='#testimonials'>Z życia</AnchorLink>
        </li>
        <li className={isCurrent('#footer', pathname)}>
        
          <AnchorLink className="smoothscroll" href='#footer'>Linki</AnchorLink>
        </li>
      </ul>
    </nav>
  )}
};

export default Navigation;
