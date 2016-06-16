import React from 'react';

const Welcome = React.createClass({
  getDefaultProps() {
    return {
      message: '欢迎使用微信CMS!',
    };
  },
  render() {
    return (<div>{this.props.message}</div>);
  },
});

export default Welcome;
