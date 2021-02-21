import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";

const windowWith = Dimensions.get("window").width;

const ProductList = (props) => {
  return (
    <TouchableOpacity style={{ width: "50%" }}>
      <View
        style={{ width: windowWith / 2, backgroundColor: "gainsboro" }}
      ></View>
    </TouchableOpacity>
  );
};

export default ProductList;
