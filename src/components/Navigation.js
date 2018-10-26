import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const isCurrent = (anchor, pathname) => {
  return pathname.includes(anchor)
  ? 'current'
  : ''
}


class Navigation extends React.Component {
  state = {
    pathname: '#home'
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({pathname: window.location.href});
    })
  }

  onClick(event) {
    this.setState({pathname: event.target.getAttribute('href')})
  }

  render() {
    const { pathname = '' } = this.state
    return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className={isCurrent('#home', pathname)}>
        <AnchorLink onClick={(e) => this.onClick(e)} href='#home'>Home</AnchorLink>
        </li>
        <li className={isCurrent('#about', pathname)}>
        <AnchorLink onClick={(e) => this.onClick(e)} href='#about'>O Mnie</AnchorLink>
        </li>
        <li className={isCurrent('#resume', pathname)}>
        <AnchorLink onClick={(e) => this.onClick(e)}  href='#resume'>Umiejętności</AnchorLink>
        </li>
        {/* <li className={isCurrent('#portfolio', pathname)}>
          <a className="smoothscroll" href="#portfolio">
            Praca
          </a>
        </li> */}
        <li className={isCurrent('#testimonials', pathname)}>
         
          <AnchorLink onClick={(e) => this.onClick(e)} className="smoothscroll" href='#testimonials'>Z życia</AnchorLink>
        </li>
        <li className={isCurrent('#footer', pathname)}>
        
          <AnchorLink onClick={(e) => this.onClick(e)} className="smoothscroll" href='#footer'>Linki</AnchorLink>
        </li>
      </ul>
    </nav>
  )}
};

export default Navigation;
