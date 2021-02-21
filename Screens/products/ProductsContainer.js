import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import ProductList from "./PoductList";
const data = require("../../assets/data/products.json");
const ProductContainer = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <View>
      <Text>Products Container</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductList key={item.id} item={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default ProductContainer;
