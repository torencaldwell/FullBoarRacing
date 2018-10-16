import React, { Component } from 'react';
import ListItem from './ListItem';
import data from '../res/navList';
import colors from '../res/colors';

class SideBar extends Component {
  state = {data: []};

  componentDidMount() {
    this.setState({data: data});
  }

  renderItems() {
    return this.state.data.map(item => <ListItem key={item.key} name={item.label}/>);
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
    width: "250px",
    height: '100%',
    padding: "3px 0 3px 0",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    border: '1px solid ' + colors.PRIMARY_RED
  }
}

export default SideBar;
