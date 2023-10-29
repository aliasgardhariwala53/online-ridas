import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7CAC9",
    paddingTop: 30,
    padding: 20,
  },
  inputContainer: {
    flex: 1,
    gap: 8,
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  input: {
    // backgroundColor: "#cecece",
    borderWidth: 2,
    padding: 10,
    borderColor: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
  tapButton: {
    backgroundColor: "#cab287",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  goalsContainer: {
    // flex: 1,
    flexDirection: "column",
  },
  goalsItem: {
    backgroundColor: "purple",
    margin: 10,
    borderRadius: 5,
  },
  goalText: {
    color: "#fff",
    padding: 10,
  },
});
