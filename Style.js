import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  check: {
    position: "absolute",
    bottom: 40,
    right: 20
  },
  titleContainer: {
    position: "absolute",
    top: 120
  },
  title: {
    fontSize: 20,
    fontFamily: "OpenSans_SemiBold"
  },
  text: {
    fontFamily: "OpenSans_SemiBold"
  },
  textState: {
    color: "grey",
    fontFamily: "OpenSans_SemiBold"
  }
});

export default styles;