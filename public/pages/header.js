import React from 'react';

const Header = React.createClass({
  render() {
    const styles = {
      header: {margin: '10px auto'},
    };

    return (
      <header style={styles.header}>
        我是头部
      </header>
    );
  },
});

export default Header;
