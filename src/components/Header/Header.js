import React from 'react'
import {Link} from 'react-router'
import styles from './styles.module.css';
export class Header extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <Link className={styles.logo} to="/"><img src="https://s15.postimg.cc/zfc2i1lbf/bhlogo.png"></img></Link>
        <section>
          Web Application
        </section>
      </div>
    )
  }
}
export default Header;