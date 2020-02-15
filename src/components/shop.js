import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Shopitem from './shopItem';
import Sidemenu from './Sidemenu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import products from './products';
import { withRouter } from 'react-router-dom';

class Shop extends Component {
  state = {
    sortShow: false,
    typeOfSort: 'New Arrivals',
    category: 'accessories',
    categoryShow: false,
    currentItems: products['Accessories']
  };

  componentWillMount = () => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    this.updateCategory();
  };

  componentWillReceiveProps = () => {
    this.updateCategory();
    window.location.reload();
  };

  updateCategory = () => {
    var category = this.props.match.params.section.toLowerCase();
    if (
      category === 'accessories' ||
      category === 'hoodies' ||
      category === 'jeans' ||
      category === 'shirts' ||
      category === 'shoes'
    ) {
      var first = category.charAt(0);
      first = first.toUpperCase();
      category = first + category.substring(1);
      var currentItems = products[category];
      currentItems = this.sortArray(currentItems);
      this.setState({
        category: category,
        currentItems: currentItems
      });
    }
  };

  toggleSort = show => {
    this.setState({
      sortShow: show
    });
  };

  toggleCategory = show => {
    this.setState({
      categoryShow: show
    });
  };

  addToCart = () => {
    alert('This item has been added to your cart');
  };

  changeSort = newsort => {
    this.setState(
      {
        typeOfSort: newsort
      },
      () => {
        var newItemArray = this.sortArray(this.state.currentItems);
        this.setState({
          currentItems: newItemArray,
          sortShow: false
        });
      }
    );
  };

  changeCategory = newcategory => {
    this.props.history.push('/shop/' + newcategory);
    this.setState({
      categoryShow: false
    });
  };

  sortArray = arr => {
    function rateCompare(a, b) {
      if (a[4] < b[4]) {
        return 1;
      } else {
        return -1;
      }
    }
    function ageCompare(a, b) {
      if (a[5] < b[5]) {
        return -1;
      } else {
        return 1;
      }
    }
    function alphaCompare(a, b) {
      if (a[0] < b[0]) {
        return -1;
      } else {
        return 1;
      }
    }
    function priceCompare(a, b) {
      var a1 = parseInt(a[3].substring(1)); //We are removing the dollar signs and changing to an int comparison
      var b1 = parseInt(b[3].substring(1));
      if (a1 < b1) {
        return -1;
      } else {
        return 1;
      }
    }
    function reversePriceCompare(a, b) {
      var a1 = parseInt(a[3].substring(1)); //We are removing the dollar signs and changing to an int comparison
      var b1 = parseInt(b[3].substring(1));
      if (a1 < b1) {
        return 1;
      } else {
        return -1;
      }
    }
    if (this.state.typeOfSort === 'New Arrivals') {
      arr.sort(ageCompare);
    }
    if (this.state.typeOfSort === 'Alphabetical (A-Z)') {
      arr.sort(alphaCompare);
    }
    if (this.state.typeOfSort === 'Price: Low to High') {
      arr.sort(priceCompare);
    }
    if (this.state.typeOfSort === 'Price: High to Low') {
      arr.sort(reversePriceCompare);
    }
    if (this.state.typeOfSort === 'Rating') {
      arr.sort(rateCompare);
    }
    return arr;
  };

  navigate = path => {};

  render() {
    var dropDownClasses = 'dropDownIcon ';
    if (this.state.sortShow) {
      dropDownClasses += 'rotate';
    }

    return (
      <Fragment>
        <img className="shopBanner" src="../img/mensbanner.jpg" alt="banner" />
        <Sidemenu category={this.state.category} />
        <div className="Content">
          <div id="leftShopMenuContainer">
            <p className="shopMenuLabel"> Sort By: </p>
            <div
              className="sortmenu menu-root"
              onClick={this.toggleSort.bind(this, true)}
              onMouseLeave={this.toggleSort.bind(this, false)}
            >
              <p className="maintext"> {this.state.typeOfSort}</p>
              <ExpandMoreIcon className={dropDownClasses} />
              <div hidden={!this.state.sortShow}>
                <div className="shopmenu-items">
                  <div onClick={this.changeSort.bind(this, 'New Arrivals')}>
                    {'New Arrivals'}
                  </div>
                  <div
                    onClick={this.changeSort.bind(this, 'Price: Low to High')}
                  >
                    {'Price: Low to High'}
                  </div>
                  <div
                    onClick={this.changeSort.bind(this, 'Price: High to Low')}
                  >
                    {'Price: High to low'}
                  </div>
                  <div
                    onClick={this.changeSort.bind(this, 'Alphabetical (A-Z)')}
                  >
                    {'Alphabetical (A-Z)'}
                  </div>
                  <div onClick={this.changeSort.bind(this, 'Rating')}>
                    {'Rating'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="rightShopMenuContainer">
            <p className="shopMenuLabel"> Category: </p>
            <div
              className="sortmenu menu-root"
              onClick={this.toggleCategory.bind(this, true)}
              onMouseLeave={this.toggleCategory.bind(this, false)}
            >
              <p className="maintext"> {this.state.category}</p>
              <ExpandMoreIcon className={dropDownClasses} />
              <div hidden={!this.state.categoryShow}>
                <div className="shopmenu-items">
                  <div onClick={this.changeCategory.bind(this, 'Accessories')}>
                    {'Accessories'}
                  </div>
                  <div onClick={this.changeCategory.bind(this, 'Hoodies')}>
                    {'Hoodies'}
                  </div>
                  <div onClick={this.changeCategory.bind(this, 'Jeans')}>
                    {'Jeans'}
                  </div>
                  <div onClick={this.changeCategory.bind(this, 'Shirts')}>
                    {'Shirts'}
                  </div>
                  <div onClick={this.changeCategory.bind(this, 'Shoes')}>
                    {'Shoes'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Grid container spacing={0} alignContent={'center'}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Shopitem
                name={this.state.currentItems[0][0]}
                desc={this.state.currentItems[0][1]}
                img={this.state.currentItems[0][2][0]}
                price={this.state.currentItems[0][3]}
                rating={this.state.currentItems[0][4]}
                id={this.state.currentItems[0][5]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Shopitem
                name={this.state.currentItems[1][0]}
                desc={this.state.currentItems[1][1]}
                img={this.state.currentItems[1][2][0]}
                price={this.state.currentItems[1][3]}
                rating={this.state.currentItems[1][4]}
                id={this.state.currentItems[1][5]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Shopitem
                name={this.state.currentItems[2][0]}
                desc={this.state.currentItems[2][1]}
                img={this.state.currentItems[2][2][0]}
                price={this.state.currentItems[2][3]}
                rating={this.state.currentItems[2][4]}
                id={this.state.currentItems[2][5]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Shopitem
                name={this.state.currentItems[3][0]}
                desc={this.state.currentItems[3][1]}
                img={this.state.currentItems[3][2][0]}
                price={this.state.currentItems[3][3]}
                rating={this.state.currentItems[3][4]}
                id={this.state.currentItems[3][5]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Shopitem
                name={this.state.currentItems[4][0]}
                desc={this.state.currentItems[4][1]}
                img={this.state.currentItems[4][2][0]}
                price={this.state.currentItems[4][3]}
                rating={this.state.currentItems[4][4]}
                id={this.state.currentItems[4][5]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Shopitem
                name={this.state.currentItems[5][0]}
                desc={this.state.currentItems[5][1]}
                img={this.state.currentItems[5][2][0]}
                price={this.state.currentItems[5][3]}
                rating={this.state.currentItems[5][4]}
                id={this.state.currentItems[5][5]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Shopitem
                name={this.state.currentItems[6][0]}
                desc={this.state.currentItems[6][1]}
                img={this.state.currentItems[6][2][0]}
                price={this.state.currentItems[6][3]}
                rating={this.state.currentItems[6][4]}
                id={this.state.currentItems[6][5]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Shopitem
                name={this.state.currentItems[7][0]}
                desc={this.state.currentItems[7][1]}
                img={this.state.currentItems[7][2][0]}
                price={this.state.currentItems[7][3]}
                rating={this.state.currentItems[7][4]}
                id={this.state.currentItems[7][5]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Shopitem
                name={this.state.currentItems[8][0]}
                desc={this.state.currentItems[8][1]}
                img={this.state.currentItems[8][2][0]}
                price={this.state.currentItems[8][3]}
                rating={this.state.currentItems[8][4]}
                id={this.state.currentItems[8][5]}
              />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Shop);
