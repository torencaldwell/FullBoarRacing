import React from 'react';
import colors from '../res/colors';

const MastHead = (props) => {
  return (
    <div style={styles}>
      <h1>{props.children}</h1>
    </div>
  );
}

const styles = {
  backgroundColor: colors.PRIMARY_RED,
  height: '80px',
  flex: 1,
  padding: '10px'
}

export { MastHead };
