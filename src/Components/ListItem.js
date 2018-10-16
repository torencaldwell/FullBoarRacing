import React, { Component } from 'react';
import colors from '../res/colors';

class ListItem extends Component {
  state = {style: styles.tabStyle};

  mouseEnter(event) {
    console.log(styles);
    this.setState({style: styles.mouseOver});
  }

  mouseLeave(event) {
    this.setState({style: styles.tabStyle});
  }

  render(){
    return (
      <div id={this.props.id} style={this.state.style} onMouseEnter={event => this.mouseEnter(event)} onMouseLeave={event => this.mouseLeave(event)}>
        <p>{this.props.name}</p>
      </div>
    );
  }
};

const styles = {
  tabStyle : {
    flex: 1,
    backgroundColor: colors.PRIMARY_RED,
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  mouseOver : {
    flex: 1,
    backgroundColor: colors.SECONDARY_RED,
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  }
}


export default ListItem;
