import React from 'react';

const Footer = React.createClass({
  render() {
    const styles = {
      footer: {margin: '10px auto'},
    };

    return (
      <footer style={styles.footer}>
        我是底部
      </footer>
    );
  },
});

export default Footer;
