import React, { Component } from 'react';
import {
  Router,
  Scene,
} from "react-native-router-flux";
import { Container, Content } from 'native-base';
import { Root } from "native-base";
import Quest from './Quest';
import Login from './Login';
import Store from './Store';
import Home from './Home';


export default class App extends Component {
  render() {
    return (
      <Container >
        <Content
          scrollEnabled={false}
          contentContainerStyle={{
            flex: 1
          }}
        >
          <Root>
            <Router>
              <Scene key="root">
                <Scene
                  key="login"
                  component={Login}
                  hideNavBar
                  drawerLockMode="locked-closed"
                  direction="fade"
                />
                <Scene
                  key="home"
                  component={Home}
                  hideNavBar
                  drawerLockMode="locked-closed"
                  direction="fade"
                  initial
                />
                <Scene
                  key="quest"
                  component={Quest}
                  hideNavBar
                  drawerLockMode="locked-closed"
                  direction="fade"

                />
                <Scene
                  key="store"
                  component={Store}
                  hideNavBar
                  drawerLockMode="locked-closed"
                  direction="fade"
                />
              </Scene>
            </Router>
          </Root>
        </Content>
      </Container>
    );
  }
};
