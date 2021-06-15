import {
  Button, Container, Content, H1, Input, Item, Text
} from "native-base";
import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Text style={{ marginTop: 60, textAlign: "center" }}>
          <H1>Login Sistem Academy</H1>
        </Text>
        <Content style={{ marginHorizontal: 12, marginTop: 30 }}>
          <Item rounded>
            <Input placeholder="Masukan Username Anda" />
          </Item>
          <Item rounded style={{ marginTop: 30 }}>
            <Input placeholder="Masukan Password Anda" />
          </Item>

          <Button rounded block style={{ marginTop: 20 }}>
            <Text>Login Sistem</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
