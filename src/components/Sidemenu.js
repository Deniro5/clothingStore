import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class Sidemenu extends Component {
  navigate = path => {
    this.props.history.push('/shop/' + path);
  };
  render() {

    const menu = (
      <Fragment>
      <h2> SHOP BY PRODUCT </h2>
      <p
        onClick={this.navigate.bind(this, 'accessories')}
        className={
          'SideMenuContainerItem ' +
          (this.props.category === 'Accessories' ? 'selected' : '')
        }
      >
        {' '}
        Accessories{' '}
      </p>
      <p
        onClick={this.navigate.bind(this, 'hoodies')}
        className={
          'SideMenuContainerItem ' +
          (this.props.category === 'Hoodies' ? 'selected' : '')
        }
      >
        {' '}
        Hoodies{' '}
      </p>
      <p
        onClick={this.navigate.bind(this, 'jeans')}
        className={
          'SideMenuContainerItem ' +
          (this.props.category === 'Jeans' ? 'selected' : '')
        }
      >
        {' '}
        Jeans{' '}
      </p>
      <p
        onClick={this.navigate.bind(this, 'shirts')}
        className={
          'SideMenuContainerItem ' +
          (this.props.category === 'Shirts' ? 'selected' : '')
        }
      >
        {' '}
        Shirts{' '}
      </p>
      <p
        onClick={this.navigate.bind(this, 'shoes')}
        className={
          'SideMenuContainerItem ' +
          (this.props.category === 'Shoes' ? 'selected' : '')
        }
      >
        {' '}
        Shoes{' '}
      </p>
    </Fragment>
    )
    return (
      <div className="SideMenuContainer">
        {menu}
        {menu}
        {menu}
      </div>
    );
  }
}

export default withRouter(Sidemenu);
