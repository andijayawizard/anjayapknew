import {
  Body, Button, Header, Icon, Left, Right, Title
} from "native-base";
import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <Header noShadow>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ marginLeft: 40 }}>Babastudio</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }
}
