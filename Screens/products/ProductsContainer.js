import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { Container, Header, Icon, Input, Item, Text } from "native-base";
import ProductList from "./PoductList";
import SearchedProducts from "./SearchedProducts";
import Banner from "../../Shared/Banner";
import CategoriesFilter from "./CategoriesFilter";

const data = require("../../assets/data/products.json");
const categories = require("../../assets/data/categories");
const ProductContainer = () => {
  // States
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(categories);
    setActive(-1);
    setInitialState(data);
    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive();
      setInitialState([]);
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };
  const openList = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search Product"
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus == true ? <Icon name="ios-close" onPress={onBlur} /> : null}
        </Item>
      </Header>
      {focus == true ? (
        <SearchedProducts productsFiltered={productsFiltered} />
      ) : (
        <View>
          <View>
            <Banner />
          </View>
          <View>
            <CategoriesFilter />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={products}
              numColumns={2}
              renderItem={({ item }) => (
                <ProductList key={item.id} item={item} />
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      )}
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
