import React, { useState, Fragment, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Shopitem from './shopItem';
import Sidemenu from './Sidemenu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import products from './products';
import { withRouter } from 'react-router-dom';

const Shop = props => {
  const [sortShow, setSortShow] = useState(false);
  const [typeOfSort, setTypeOfSort] = useState('New Arrivals');
  const [category, setCategory] = useState('accessories');
  const [categoryShow, setCategoryShow] = useState(false);
  const [currentItems, setCurrentItems] = useState(products['Accessories']);
  const [loaded, setLoaded] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    updateCategory();
  }, [props.match.params.section]);

  useEffect(() => {
    if (loaded) {
      // We dont want this to run on the first time since array is sorted by default
      let oldArray = [...currentItems];
      let sortedArray = sortArray(oldArray);
      setCurrentItems(sortedArray);
    } else {
      setLoaded(true);
    }
  }, [typeOfSort]);

  const updateCategory = () => {
    var category = props.match.params.section.toLowerCase();
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
      setCategory(category);
      setCurrentItems(currentItems);
    }
  };

  const toggleSort = show => {
    setSortShow(show);
  };

  const toggleCategory = show => {
    setCategoryShow(show);
  };

  const changeSort = newsort => {
    setTypeOfSort(newsort);
  };

  const changeCategory = newcategory => {
    props.history.push('/shop/' + newcategory);
    setCategoryShow(false);
  };

  const sortArray = arr => {
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
    if (typeOfSort === 'New Arrivals') {
      arr.sort(ageCompare);
    }
    if (typeOfSort === 'Alphabetical (A-Z)') {
      arr.sort(alphaCompare);
    }
    if (typeOfSort === 'Price: Low to High') {
      arr.sort(priceCompare);
    }
    if (typeOfSort === 'Price: High to Low') {
      arr.sort(reversePriceCompare);
    }
    if (typeOfSort === 'Rating') {
      arr.sort(rateCompare);
    }
    return arr;
  };

  var dropDownClasses = 'dropDownIcon ';
  if (sortShow) {
    dropDownClasses += 'rotate';
  }

  return (
    <Fragment>
      <img className="shopBanner" src="imgs/mensbanner.jpg" alt="banner" />
      <Sidemenu category={category} />
      <div className="Content">
        <div id="leftShopMenuContainer">
          <p className="shopMenuLabel"> Sort By: </p>
          <div
            className="sortmenu menu-root"
            onClick={toggleSort.bind(this, true)}
            onMouseLeave={toggleSort.bind(this, false)}
          >
            <p className="maintext"> {typeOfSort}</p>
            <ExpandMoreIcon className={dropDownClasses} />
            <div hidden={!sortShow}>
              <div className="shopmenu-items">
                <div onClick={changeSort.bind(this, 'New Arrivals')}>
                  {'New Arrivals'}
                </div>
                <div onClick={changeSort.bind(this, 'Price: Low to High')}>
                  {'Price: Low to High'}
                </div>
                <div onClick={changeSort.bind(this, 'Price: High to Low')}>
                  {'Price: High to low'}
                </div>
                <div onClick={changeSort.bind(this, 'Alphabetical (A-Z)')}>
                  {'Alphabetical (A-Z)'}
                </div>
                <div onClick={changeSort.bind(this, 'Rating')}>{'Rating'}</div>
              </div>
            </div>
          </div>
        </div>
        <div id="rightShopMenuContainer">
          <p className="shopMenuLabel"> Category: </p>
          <div
            className="sortmenu menu-root"
            onClick={toggleCategory.bind(this, true)}
            onMouseLeave={toggleCategory.bind(this, false)}
          >
            <p className="maintext"> {category}</p>
            <ExpandMoreIcon className={dropDownClasses} />
            <div hidden={!categoryShow}>
              <div className="shopmenu-items">
                <div onClick={changeCategory.bind(this, 'Accessories')}>
                  {'Accessories'}
                </div>
                <div onClick={changeCategory.bind(this, 'Hoodies')}>
                  {'Hoodies'}
                </div>
                <div onClick={changeCategory.bind(this, 'Jeans')}>
                  {'Jeans'}
                </div>
                <div onClick={changeCategory.bind(this, 'Shirts')}>
                  {'Shirts'}
                </div>
                <div onClick={changeCategory.bind(this, 'Shoes')}>
                  {'Shoes'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grid container spacing={0} alignContent={'center'}>
          {currentItems.map(item => (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Shopitem
                name={item[0]}
                desc={item[1]}
                img={item[2][0]}
                price={item[3]}
                rating={item[4]}
                id={item[5]}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default withRouter(Shop);
