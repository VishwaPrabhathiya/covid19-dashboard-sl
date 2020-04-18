import React, { Component } from "react";
import Switch from "react-switch";
import styled from "styled-components";
import GetData from "./GetData";

const Styles = styled.div`
  .react-switch {
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 4px;
  }
`;

class SwitchOnOff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <Styles>
        <div className="d-flex justify-content-center align-items-center">
          <label>
            <span
              style={{ position: "relative" }}
              className={this.state.checked ? "text-muted" : ""}
            >
              Sri Lanka Stats
            </span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              className="react-switch"
              handleDiameter={48}
              height={40}
              width={88}
              onColor="#00bcd4"
              offColor="#4caf50"
              uncheckedIcon={false}
              checkedIcon={false}
            />
            <span
              style={{ position: "relative" }}
              className={this.state.checked ? "" : "text-muted"}
            >
              World Stats
            </span>
          </label>
        </div>
        {this.state.checked ? (
          <GetData name="Worldstats" />
        ) : (
          <GetData name="SLstats" />
        )}
      </Styles>
    );
  }
}

export default SwitchOnOff;
