import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from 'react-rating';
import products from './products';

class productDescription extends Component {
  constructor(props) {
    super(props);
    this.state = { currStyle: 0, currentItem: [] };
  }

  componentWillMount = () => {
    var index = Math.floor((this.props.id - 1) / 9); //The type of product
    var index1 = (this.props.id - 1) % 9; // The actual product
    let item = [];
    if (index === 0) {
      item = products['Accessories'][index1];
    } else if (index === 1) {
      item = products['Hoodies'][index1];
    } else if (index === 2) {
      item = products['Jeans'][index1];
    } else if (index === 3) {
      item = products['Shirts'][index1];
    } else if (index === 4) {
      item = products['Shoes'][index1];
    }
    this.setState({
      currentItem: item
    });
  };

  styleSelect = (e, style) => {
    alert(style);
    e.target.className += ' activeStyleSquare';
    this.setState({
      currStyle: style
    });
  };

  render() {
    let styleSquares = [];
    for (let count = 0; count < 5; count++) {
      styleSquares.push(
        <img
          alt="style"
          src={this.state.currentItem[2][count]}
          className={
            'styleSquare ' +
            (this.state.currentItem[2].length > count ? '' : 'hide') +
            (this.state.currStyle === count ? ' activeStyleSquare' : '')
          }
          onClick={e => this.styleSelect(e, count)}
        />
      );
    }

    return (
      <div className="productHome">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={6}>
            <img
              alt="item"
              className="productImg"
              src={this.state.currentItem[2][this.state.currStyle]}
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h2 className="productTitle"> {this.state.currentItem[0]} </h2>
            <p className="productDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
              magna cursus, iaculis massa at, aliquam lorem. Nullam non nisi ut
              ex sagittis eleifend. Duis id tempor tortor, nec sagittis metus.
              Duis ut ex eu eros venenatis egestas. Aliquam mattis tempus risus,
              vitae rutrum lectus vulputate eget. Sed cursus dolor.
            </p>
            <h2 className="productPrice"> {this.state.currentItem[3]} </h2>
            <h2 className="productRating">
              <Rating
                readonly
                initialRating={this.state.currentItem[4]}
                emptySymbol={
                  <img src="imgs/emptystar.png" className="icon" alt="" />
                }
                fullSymbol={
                  <img src="imgs/star.png" className="icon" alt="*" />
                }
              />
              <span className="reviewLabel"> 101 Reviews </span>
            </h2>
            <h3> Style: {this.state.currentItem[6][this.state.currStyle]} </h3>
            {styleSquares}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default productDescription;
