import React, { Component } from 'react';
import colors from '../res/colors';
import {NavLink} from 'react-router-dom';

class ListItem extends Component {
  state = {style: styles.tabStyle};

  mouseEnter(event) {
    this.setState({style: styles.mouseOver});
  }

  mouseLeave(event) {
    this.setState({style: styles.tabStyle});
  }

  render(){
    return (
      <NavLink to={this.props.href} style={this.state.style}onMouseEnter={event => this.mouseEnter(event)} onMouseLeave={event => this.mouseLeave(event)}>
        <p>{this.props.name}</p>
      </NavLink>
    );
  }
};

const styles = {
  tabStyle : {
    flex: 1,
    textDecoration: 'none',
    backgroundColor: colors.PRIMARY_RED,
    color: colors.BLACK,
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  mouseOver : {
    flex: 1,
    textDecoration: 'none',
    backgroundColor: colors.SECONDARY_RED,
    color: colors.BLACK,
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  }
}


export default ListItem;
