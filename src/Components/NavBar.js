import React, { Component } from 'react';
import ListItem from './ListItem';
import colors from '../res/colors';
import navList from '../res/navList';

class NavBar extends Component {
  state = {data: [], selected: {}};

  componentDidMount() {
    this.setState({data: navList});
  }

  renderItems() {
    return this.state.data.map(item =>
      <ListItem
        id={item.DOMiD}
        key={item.key}
        name={item.label}
        href={item.href}
      />);
  }

  render() {
    return(
      <div style={styles.sideBar}>{this.renderItems()}</div>
    );
  }
}

const styles = {
  sideBar : {
    backgroundColor: colors.PRIMARY_RED,
    flex: 1,
    padding: '0 0 0 0',
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
    boxShadow: '0px -3px 7px ' + colors.BOX_SHADOW
  }
}

export { NavBar };
