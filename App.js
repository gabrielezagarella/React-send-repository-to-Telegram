import React from "react";
import { View, ActivityIndicator, StatusBar } from "react-native";
import User from "./screens/User";
import Repo from "./screens/Repo";
import Label from "./components/Label";
import ButtonInput from "./components/Button";
import styles from "./Style";
import * as Font from "expo-font";

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
      isAddModalRepo: false,
      repo: "repo"
    });
  };

  render() {
    const { assetsLoaded } = this.state;
    if (assetsLoaded) {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Label style={styles.title} label="Set the repository address" />
          </View>
          <Label label={this.state.github} />
          <Label style={styles.textState} label={this.state.user} />
          <User
            visible={this.state.isAddModalUser}
            user={this.changeTextUser}
            check={this.goRepo}
            back={() =>
              this.setState({
                isAddModalUser: false,
                user: "user"
              })
            }
          />
          <Label style={styles.textState} label={this.state.repo} />
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
            <ButtonInput
              color="blue"
              title="SEND"
              onPress={() => {
                this.submit();
              }}
            />
          </View>
          <ButtonInput
            color="black"
            title="CHECK"
            onPress={() =>
              this.setState({
                isAddModalUser: true
              })
            }
          />
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
