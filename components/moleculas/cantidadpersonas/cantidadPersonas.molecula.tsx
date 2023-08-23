import { Modal, Pressable, Text, TouchableHighlight, View } from "react-native";
import { styles } from "./cantidadpersonasCSS";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAdults, addChildren, addRooms } from "../../../redux/personsSlice";

interface Istate {
  person: {
    rooms: number;
    adults: number;
    children: number;
  };
}

const CantidadPersonasMolecula = () => {
  const roomStore = useSelector((state: Istate) => state.person.rooms);
  const adultStore = useSelector((state: Istate) => state.person.adults);
  const childrenStore = useSelector((state: Istate) => state.person.children);

  const [modalVisible, setModalVisible] = useState(true);
  const [rooms, setRooms] = useState(roomStore);
  const [adults, setAdults] = useState(adultStore);
  const [children, setChildren] = useState(childrenStore);

  const dispatch = useDispatch();

  return (
    <View>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.inputText}>
          {roomStore} {roomStore > 1 ? "rooms " : "room "} 
          - {adultStore}{" "}{adultStore > 1 ? "adults " : "adult "} 
          - {childrenStore<1?"":childrenStore}{" "}
          {childrenStore == 0
            ? "No children"
            : childrenStore < 2
            ? "Child"
            : childrenStore > 1
            ? "Children"
            : null}
        </Text>
      </TouchableHighlight>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Contenido */}
            {/* Titulo */}
            <View style={styles.titleContainer}>
              <Text style={styles.modalText}>Select rooms and guest</Text>
            </View>
            <View style={styles.sectionContent}>
              {/* Rooms */}
              <View style={styles.section}>
                <View style={styles.sectionTitle}>
                  <Text style={styles.Title}>Rooms</Text>
                </View>
                <View style={styles.sectionOperations}>
                  <Pressable
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => {
                      if (rooms > 1) {
                        setRooms(rooms - 1);
                      }
                    }}
                  >
                    <Text style={{ fontSize: 50, fontWeight: "100" }}>-</Text>
                  </Pressable>
                  <Text>{rooms}</Text>
                  <Pressable
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => {
                      setRooms(rooms + 1);
                    }}
                  >
                    <Text style={{ fontSize: 50, fontWeight: "100" }}>+</Text>
                  </Pressable>
                </View>
              </View>
              {/* Adults */}
              <View style={styles.section}>
                <View style={styles.sectionTitle}>
                  <Text style={styles.Title}>Adults</Text>
                </View>
                <View style={styles.sectionOperations}>
                  <Pressable
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => {
                      if (adults > 1) {
                        setAdults(adults - 1);
                      }
                    }}
                  >
                    <Text style={{ fontSize: 50, fontWeight: "100" }}>-</Text>
                  </Pressable>
                  <Text>{adults}</Text>
                  <Pressable
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => {
                      setAdults(adults + 1);
                    }}
                  >
                    <Text style={{ fontSize: 50, fontWeight: "100" }}>+</Text>
                  </Pressable>
                </View>
              </View>
              {/* Children */}
              <View style={styles.section}>
                <View style={styles.sectionTitle}>
                  <Text style={styles.Title}>Children</Text>
                  <Text style={styles.Title}>Ages 0 - 17</Text>
                </View>
                <View style={styles.sectionOperations}>
                  <Pressable
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => {
                      if (children > 0) {
                        setChildren(children - 1);
                      }
                    }}
                  >
                    <Text style={{ fontSize: 50, fontWeight: "100" }}>-</Text>
                  </Pressable>
                  <Text>{children}</Text>
                  <Pressable
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => {
                      setChildren(children + 1);
                    }}
                  >
                    <Text style={{ fontSize: 50, fontWeight: "100" }}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            {/* //Contenido */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                dispatch(addRooms(rooms));
                dispatch(addAdults(adults));
                dispatch(addChildren(children));
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Apply</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CantidadPersonasMolecula;
