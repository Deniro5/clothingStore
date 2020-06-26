import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    color: 'black',
    textDecoration: 'none'
  }
};

class Sidemenu extends Component {
  navigate = path => {
    this.props.history.push('/shop/' + path);
  };
  render() {
    const menu = (
      <Fragment>
        <h2> SHOP BY PRODUCT </h2>
        <Link style={styles.link} to="/shop/accessories">
          <p
            className={
              'SideMenuContainerItem ' +
              (this.props.category === 'Accessories' ? 'selected' : '')
            }
          >
            Accessories
          </p>
        </Link>
        <Link style={styles.link} to="/shop/hoodies">
          <p
            className={
              'SideMenuContainerItem ' +
              (this.props.category === 'Hoodies' ? 'selected' : '')
            }
          >
            Hoodies
          </p>
        </Link>
        <Link style={styles.link} to="/shop/jeans">
          <p
            className={
              'SideMenuContainerItem ' +
              (this.props.category === 'Jeans' ? 'selected' : '')
            }
          >
            Jeans
          </p>
        </Link>
        <Link style={styles.link} to="/shop/shirts">
          <p
            className={
              'SideMenuContainerItem ' +
              (this.props.category === 'Shirts' ? 'selected' : '')
            }
          >
            Shirts
          </p>
        </Link>
        <Link style={styles.link} to="/shop/shoes">
          <p
            className={
              'SideMenuContainerItem ' +
              (this.props.category === 'Shoes' ? 'selected' : '')
            }
          >
            Shoes
          </p>
        </Link>
      </Fragment>
    );
    return <div className="SideMenuContainer">{menu}</div>;
  }
}

export default withRouter(Sidemenu);
