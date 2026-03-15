import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome chips</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome chips</div>
    // ) : (
    //   <div>Welcome guest</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome chips</div>;
    // } else {
    //   message = <div>Welcome guest</div>;
    // }
    // return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome chips</div>;
    // } else {
    //   return <div>Welcome guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome chips</div>
    //     <div>Welcome guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
