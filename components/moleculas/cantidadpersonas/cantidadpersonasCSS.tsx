import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 400,
  },
  button: {
    padding: 10,
    elevation: 2,
    width: "100%",
    paddingVertical: 20,
    borderRadius: 5
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  titleContainer: {},
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
  },
  sectionContent: {
    width: "100%",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  sectionTitle: {
    justifyContent: "center"
  },
  Title: {
    fontWeight: "bold",
  },
  sectionOperations: {
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 3,
    fontSize: 8,
  },
  inputText: {
    padding: 1,
    paddingVertical: 13,
    paddingLeft: 8,
  },
});
