import { View, Text, StyleSheet } from "react-native";

import MenuItem from "./MenuItem";

let menu: {
  itemName: string
  itemPrice: string
  buttonColor: string
}[] = [
  { itemName: "Ham Sandwich", itemPrice: "16.00", buttonColor: "#6D9496" },
  { itemName: "Tuna Sandwich", itemPrice: "21.00", buttonColor: "#e1b382" },
  { itemName: "Steak Sandwich", itemPrice: "21.00", buttonColor: "#2d545e" },
  { itemName: "Cheese Burger", itemPrice: "16.00", buttonColor: "#12343b" },
  { itemName: "Backon Burger", itemPrice: "16.00", buttonColor: "#6D9496" },
  { itemName: "Veggie Sandwich", itemPrice: "9.00", buttonColor: "#6D9496" },
  {
    itemName: "Cheese Veggie Sandwich",
    itemPrice: "11.00",
    buttonColor: "#6D9496",
  },
  { itemName: "Grilled Cheese", itemPrice: "12.00", buttonColor: "#6D9496" },
  { itemName: "Hotdog", itemPrice: "12.00", buttonColor: "#6D9496" },
  { itemName: "BLT", itemPrice: "16.00", buttonColor: "#6D9496" },
]

function MenuPage() {
  return (
    <View style={styles.background}>
      <View style={styles.menuItemsContainer}>
        {menu.map((item) => (
          <View key={item.itemName}>
            <MenuItem
              itemName={item.itemName}
              itemPrice={item.itemPrice}
              buttonColor={item.buttonColor}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

export default MenuPage;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    width: 622
  },
  menuItemsContainer: {
    flexDirection: "row",
    marginLeft: 1,
    marginTop: 1,
    flexWrap: "wrap"
  },
});
