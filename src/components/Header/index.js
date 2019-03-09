import React from 'react'
import { Link } from 'gatsby'
import Image from 'components/image'
import 'font-awesome/css/font-awesome.min.css';
import './style.scss'



 

class Header extends React.Component {
  
        constructor(props) {
        super(props);
        
        this.state = {
          windowWidth: 1081,
          mobileNavVisible: false
        };
        }
        

        
  handleResize() {
  this.setState({windowWidth: window.innerWidth});
}

  componentDidMount() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth<this.state.windowWidth){this.handleResize()}
    window.addEventListener('resize', this.handleResize.bind(this));
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
    window.removeEventListener('resize', this.handleResize.bind(this));
    }
  } 

  navigationLinks(){
    const {location } =this.props
    
    return(
      <ul className={this.state.mobileNavVisible ? "navbar-nav mr-auto mt-2 mt-md-0" :"navbar-nav bd-navbar-nav"}
      >
                  <li key={1}
                    className={
                      location.pathname === '/' ? 'nav-item active' : 'nav-item'
                    }
                  >
                    <Link to="/" className="nav-link">
                      Anasayfa
                    </Link>
                  </li>
                  <li key={2}
                    className={
                      location.pathname === '/kedi/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/kedi/" className="nav-link">
                      Kedi
                    </Link>
                    
                  </li>
                  <li key={3}
                    className={
                      location.pathname === '/kopek/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/kopek/" className="nav-link">
                      Köpek
                    </Link>
                    
                  </li>
                   <li key={4}
                    className={
                      location.pathname === '/iletisim/'
                        ? 'nav-item active'
                        : 'nav-item'
                    }
                  >
                    <Link to="/iletisim/" className="nav-link">
                      İletişim
                    </Link>
                    
                  </li>
                </ul>
      
      )
    
  }
  
  renderMobileNav() {
      if(this.state.mobileNavVisible) {
        return this.navigationLinks();
      }
    }
    
  handleNavClick() {
      if(!this.state.mobileNavVisible) {
        this.setState({mobileNavVisible: true});
      } else {
        this.setState({mobileNavVisible: false});
      }
    }
    
  renderNavigation() {
      
      
      if(this.state.windowWidth <= 1080) {
        return [
          <nav className="navbar navbar-expand-sm  flex-md-row navbar-background">
              <div className="container-fluid">
                  <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                      <Image file="ChefsChoiceLogo300x300_DarkBG.png" width="120px"/>
                    </Link>
                  </div>
                     <div className="nav navbar navbar-right">
                       <button className="navbar-toggle menu-button" onClick={this.handleNavClick.bind(this)} aria-label="Menü Aç/Kapa"><span className="menu-icon
                       " ><i className="fa fa-bars" /></span></button>
                    </div>
                  
                    <div className="navbar navbar-collapse">
                         {this.renderMobileNav()}
                    </div>
              </div>
          </nav>
        ];
      } else {
        return [
          <nav className="navbar navbar-expand flex-column flex-md-row sticky-top navbar-expand-md navbar-background">
            <div className="container">
                <div className="navbar-header" style={{display:"block"}}>
                    <Link className="navbar-brand" to="/">
                      <Image file="ChefsChoiceLogo300x300_DarkBG.png" width="100px"/>
                    </Link>
            
                 </div>
                  <div className="navbar-nav-scroll ml-auto">
                    
                       {this.navigationLinks()}
                    
                  </div>
            </div>
          </nav>
          
          
          
         
        ]; 
      }
    }
  
  
  render() {
  return(
     
          
              this.renderNavigation()
           
        
  )
}
}

export default Header

