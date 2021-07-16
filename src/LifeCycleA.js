import React, { Component } from 'react'
class LifeCycleA extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "ojhal"

    }
    console.log("LifeCycleA: constructor")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA: getDerivedStateFromProps")
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA: componentDidMount")
  }
  render() {
    console.log("LifeCycleA: render")
    return (
      <div>
        <h3>LifeCycleA</h3>
      </div>
    );
  }

}

export default LifeCycleA
