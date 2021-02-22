import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { Container, Header, Icon, Input, Item, Text } from "native-base";
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
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search Product"
            //onFocus={}
            //onChangeText={(text) => }
          />
        </Item>
      </Header>
      <View style={styles.container}>
        <Text>Products Container</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => <ProductList key={item.id} item={item} />}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default ProductContainer;
