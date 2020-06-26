import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

class Footer extends Component {
  navigate = path => {
    this.props.history.push('/shop/' + path);
  };

  render() {
    return (
      <div className="footerContainer">
        <Grid container spacing={0} align="center">
          <Grid item xs={12} sm={4}>
            <h2 className="footerTitle"> Men </h2>
            <p
              onClick={this.navigate.bind(this, 'accessories')}
              className="footerItem"
            >
              Accessories
            </p>
            <p
              onClick={this.navigate.bind(this, 'hoodies')}
              className="footerItem"
            >
              Hoodies
            </p>
            <p
              onClick={this.navigate.bind(this, 'jeans')}
              className="footerItem"
            >
              Jeans
            </p>
            <p
              onClick={this.navigate.bind(this, 'shirts')}
              className="footerItem"
            >
              Shirts
            </p>
            <p
              onClick={this.navigate.bind(this, 'shoes')}
              className="footerItem"
            >
              Shoes
            </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2 className="footerTitle"> Women </h2>
            <p
              onClick={this.navigate.bind(this, 'accessories')}
              className="footerItem"
            >
              Accessories
            </p>
            <p
              onClick={this.navigate.bind(this, 'hoodies')}
              className="footerItem"
            >
              Hoodies
            </p>
            <p
              onClick={this.navigate.bind(this, 'jeans')}
              className="footerItem"
            >
              Jeans
            </p>
            <p
              onClick={this.navigate.bind(this, 'shirts')}
              className="footerItem"
            >
              Shirts
            </p>
            <p
              onClick={this.navigate.bind(this, 'shoes')}
              className="footerItem"
            >
              Shoes
            </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2 className="footerTitle"> Kids </h2>
            <p
              onClick={this.navigate.bind(this, 'accessories')}
              className="footerItem"
            >
              Accessories
            </p>
            <p
              onClick={this.navigate.bind(this, 'hoodies')}
              className="footerItem"
            >
              Hoodies
            </p>
            <p
              onClick={this.navigate.bind(this, 'jeans')}
              className="footerItem"
            >
              Jeans
            </p>
            <p
              onClick={this.navigate.bind(this, 'shirts')}
              className="footerItem"
            >
              Shirts
            </p>
            <p
              onClick={this.navigate.bind(this, 'shoes')}
              className="footerItem"
            >
              Shoes
            </p>
          </Grid>
        </Grid>
        <hr style={{ color: 'white', width: '80%', marginTop: '50px' }} />
        <p className="footerFinePrint">
          <img alt="placeholder" src="imgs/facebook.png" />
          <img alt="placeholder" src="imgs/instagram.png" />
          <img alt="placeholder" src="imgs/youtube.png" />
          <img alt="placeholder" src="imgs/twitter.png" />
        </p>
        <p className="footerFinePrint">
          Tonryo's business concept is to offer fashion and quality at the best
          price in a sustainable way. Tonyro has since it was founded in 1947
          grown into one of the world's leading fashion companies. The content
          of this site is copyright-protected and is the property of Tonyro
          Deniro & Tony AB.
        </p>
      </div>
    );
  }
}

export default withRouter(Footer);
