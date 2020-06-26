import React, { Component, Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import products from './products';
import Cart from './Cart';
import Modal from '@material-ui/core/modal';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    color: 'black',
    textDecoration: 'none'
  }
};

class Header extends Component {
  state = {
    top: false,
    selected: '',
    searchinput: '',
    searchresult: [],
    showCart: false
  };

  showmenu = () => {
    this.setState({
      top: true
    });
  };

  hideMenu = () => {
    this.setState({
      top: false
    });
  };

  setSelected = selected => {
    this.setState({
      selected: selected
    });
  };

  home = () => {
    this.props.history.push('/');
  };

  navigate = path => {
    this.props.history.push('/shop/' + path);
    //Close the mobile menu just in case its open
    this.setState({
      top: false
    });
    window.location.reload();
  };

  toProduct = path => {
    this.props.history.push('/product/' + path);
    this.refs.searchinput.value = '';
    this.setState({
      searchinput: ''
    });
  };

  searchChange = e => {
    var count = 0;
    let currentItem1;
    let currentItem2;
    let currentItem3;
    let currentItem4;
    let currentItem5;
    var newsearchresult = [];
    var searchkey = e.target.value.toLowerCase();
    while (count < 9) {
      currentItem1 = products['Accessories'][count][0].toLowerCase();
      currentItem2 = products['Hoodies'][count][0].toLowerCase();
      currentItem3 = products['Jeans'][count][0].toLowerCase();
      currentItem4 = products['Shirts'][count][0].toLowerCase();
      currentItem5 = products['Shoes'][count][0].toLowerCase();
      if (currentItem1.includes(searchkey)) {
        newsearchresult.push(products['Accessories'][count]);
      }
      if (currentItem2.includes(searchkey)) {
        newsearchresult.push(products['Hoodies'][count]);
      }
      if (currentItem3.includes(searchkey)) {
        newsearchresult.push(products['Jeans'][count]);
      }
      if (currentItem4.includes(searchkey)) {
        newsearchresult.push(products['Shirts'][count]);
      }
      if (currentItem5.includes(searchkey)) {
        newsearchresult.push(products['Shoes'][count]);
      }
      count++;
    }

    this.setState({
      searchinput: e.target.value,
      searchresult: newsearchresult
    });
  };

  handleOpenCart = () => {
    this.setState({
      showCart: true
    });
  };

  handleCloseCart = () => {
    this.setState({
      showCart: false
    });
  };

  render() {
    let searchResults = [];
    var count = 0;
    while (count < this.state.searchresult.length && count < 5) {
      searchResults.push(
        <div
          onClick={this.toProduct.bind(this, this.state.searchresult[count][5])}
          className={'searchResultsSegment'}
        >
          <img
            alt="productimg"
            className="searchResultsSegmentImg"
            src={this.state.searchresult[count][2][0]}
          />
          <p className="searchResultsSegmentName">
            {this.state.searchresult[count][0]}
          </p>
          <p className="searchResultsSegmentInfo">
            {this.state.searchresult[count][1]}
          </p>
        </div>
      );
      count++;
    }

    const fullList = side => (
      <div
        className="mobileMenuContainer"
        role="presentation"
        onKeyDown={this.hideMenu}
      >
        <CloseIcon
          style={{ marginLeft: '5px', marginTop: '5px' }}
          onClick={this.hideMenu}
        />
        <p
          style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '-5px' }}
        >
          Select Category
        </p>
        <ExpansionPanel className="mobileMenuSegment">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Mens</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="mobileMenuContent">
              <p onClick={this.navigate.bind(this, 'accessories')}>
                Accessories
              </p>
              <p onClick={this.navigate.bind(this, 'shirts')}>Shirts</p>
              <p>Placeholder</p>
            </div>
            <div className="mobileMenuContent">
              <p onClick={this.navigate.bind(this, 'hoodies')}>Hoodies </p>
              <p onClick={this.navigate.bind(this, 'shoes')}> Shoes </p>
              <p> Placeholder </p>
            </div>
            <div className="mobileMenuContent">
              <p onClick={this.navigate.bind(this, 'jeans')}>Jeans </p>
              <p>Placeholder </p> <p>Placeholder </p>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Womens</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="mobileMenuContent">
              <p onClick={this.navigate.bind(this, 'accessories')}>
                Accessories
              </p>
              <p onClick={this.navigate.bind(this, 'shirts')}>Shirts</p>
              <p>Placeholder</p>
            </div>
            <div className="mobileMenuContent">
              <p onClick={this.navigate.bind(this, 'hoodies')}>Hoodies </p>
              <p onClick={this.navigate.bind(this, 'shoes')}> Shoes </p>
              <p> Placeholder </p>
            </div>
            <div className="mobileMenuContent">
              <p onClick={this.navigate.bind(this, 'jeans')}>Jeans </p>
              <p>Placeholder </p> <p>Placeholder </p>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>Kids</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="mobileMenuContent">
              <p onClick={this.navigate.bind(this, 'accessories')}>
                Accessories
              </p>
              <p onClick={this.navigate.bind(this, 'shirts')}>Shirts</p>
              <p>Placeholder</p>
            </div>
            <div className="mobileMenuContent">
              <p onClick={this.navigate.bind(this, 'hoodies')}>Hoodies </p>
              <p onClick={this.navigate.bind(this, 'shoes')}> Shoes </p>
              <p> Placeholder </p>
            </div>
            <div className="mobileMenuContent">
              <p onClick={this.navigate.bind(this, 'jeans')}>Jeans </p>
              <p>Placeholder </p> <p>Placeholder </p>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );

    const menu = (
      <Fragment>
        <Link style={styles.link} to="/shop/accessories">
          <p className="headerMenuSegment"> Accessories </p>
        </Link>
        <Link style={styles.link} to="/shop/hoodies">
          <p className="headerMenuSegment"> Hoodies </p>
        </Link>
        <Link style={styles.link} to="/shop/jeans">
          <p className="headerMenuSegment"> Jeans </p>
        </Link>
        <Link style={styles.link} to="/shop/shirts">
          <p className="headerMenuSegment"> shirts </p>
        </Link>
        <Link style={styles.link} to="/shop/shoes">
          <p className="headerMenuSegment"> Shoes </p>
        </Link>
      </Fragment>
    );

    return (
      <div className="headerContainer">
        <div className="subHeader leftSubHeader">
          <img
            alt="placeholder"
            className="headerLogo"
            src="imgs/logo.png"
            onClick={this.home}
          />
          <div
            className="headerMenuContainer"
            onMouseLeave={this.setSelected.bind(this, 0)}
          >
            <p
              className={
                'headerMenuName ' +
                (this.state.selected === 1 ? 'headerSelected' : '')
              }
              onClick={this.setSelected.bind(this, 1)}
            >
              MEN
            </p>
            <div
              className={
                'headerMenu ' + (this.state.selected === 1 ? '' : 'hide')
              }
            >
              {menu}
            </div>
          </div>
          <div
            className="headerMenuContainer"
            onMouseLeave={this.setSelected.bind(this, 0)}
          >
            <p
              className={
                'headerMenuName ' +
                (this.state.selected === 2 ? 'headerSelected' : '')
              }
              onClick={this.setSelected.bind(this, 2)}
            >
              WOMEN
            </p>
            <div
              style={{ left: '-33px' }}
              className={
                'headerMenu ' + (this.state.selected === 2 ? '' : 'hide')
              }
            >
              {menu}
            </div>
          </div>
          <div
            className="headerMenuContainer"
            onMouseLeave={this.setSelected.bind(this, 0)}
          >
            <p
              className={
                'headerMenuName ' +
                (this.state.selected === 3 ? 'headerSelected' : '')
              }
              onClick={this.setSelected.bind(this, 3)}
            >
              KIDS
            </p>
            <div
              className={
                'headerMenu ' + (this.state.selected === 3 ? '' : 'hide')
              }
            >
              {menu}
            </div>
          </div>
        </div>
        <div className="subHeader rightSubHeader">
          <div className="headerMobileMenuContainer">
            <MenuIcon onClick={this.showmenu} className="headerMobileMenu" />
          </div>
          <Drawer anchor="top" open={this.state.top} onClose={this.hideMenu}>
            {fullList('top')}
          </Drawer>
          <div className="searchContainer">
            <input
              ref="searchinput"
              onChange={this.searchChange.bind(this)}
              placeholder="Search..."
            />
            <div
              className="searchResults"
              hidden={this.state.searchinput.length < 1}
            >
              {searchResults}
            </div>
          </div>
          <img
            alt="placeholder"
            className="subHeaderIcon"
            src="imgs/cart.png"
            onClick={this.handleOpenCart}
          />
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.showCart}
            onClose={this.handleCloseCart}
          >
            <div className="cartModal">
              <img
                alt="placeholder"
                onClick={this.handleCloseCart}
                src="imgs/close.png"
                className="shopItemModalClose"
              />
              <Cart handleClose={this.handleCloseCart.bind(this)} />
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
