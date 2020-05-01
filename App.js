import React from "react";
import { View, Button, Text, ActivityIndicator, StatusBar } from "react-native";
import User from "./Components/User";
import Repo from "./Components/Repo";
import * as Font from "expo-font";
import styles from "./Style";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      github: "github.com/",
      user: "user",
      repo: "repo",
      isAddModalUser: false,
      isAddModalRepo: false,
      assetsLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      OpenSans_SemiBold: require("./assets/fonts/OpenSans_SemiBold.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  changeTextUser = value => {
    this.setState({
      user: value
    });
  };

  changeTextRepo = value => {
    this.setState({
      repo: value
    });
  };

  submit() {
    if (this.state.user === "user" || this.state.repo === "repo") {
      return alert("write something!");
    }
    let url = "https://pushmore.marc.io/webhook/t8vEMvPa8VDay4TgtTRkRm2m/";
    let repoUrl = this.state.github + this.state.user + "/" + this.state.repo;
    let sender = "Gabriele";
    console.log("repoUrl", repoUrl);
    console.log("sender", sender);
    console.log("url:", url);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(repoUrl, sender)
    }).then(result => {
      result.json().then(resp => {
        console.warn("resp", resp);
      });
    });
  }

  goRepo = () => {
    this.setState({
      isAddModalUser: false,
      isAddModalRepo: true
    });
  };

  backUser = () => {
    this.setState({
      isAddModalUser: true,
      isAddModalRepo: false
    });
  };

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Set the repository address</Text>
          </View>
          <Text style={styles.text}>{this.state.github}</Text>
          <Text style={styles.textState}>{this.state.user}</Text>
          <User
            visible={this.state.isAddModalUser}
            user={this.changeTextUser}
            check={this.goRepo}
            back={() =>
              this.setState({
                isAddModalUser: false
              })
            }
          />
          <Text style={styles.textState}>{this.state.repo}</Text>
          <Repo
            visible={this.state.isAddModalRepo}
            repo={this.changeTextRepo}
            check={() =>
              this.setState({
                isAddModalRepo: false
              })
            }
            back={this.backUser}
          />
          <View style={styles.check}>
            <View style={{ marginBottom: 10 }}>
              <Button
                title="SEND"
                onPress={() => {
                  this.submit();
                }}
              />
            </View>
            <View>
              <Button
                color="black"
                title="CHECK"
                onPress={() =>
                  this.setState({
                    isAddModalUser: true
                  })
                }
              />
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
}
