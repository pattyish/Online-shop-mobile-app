import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-swiper";

var windowWith = Dimensions.get("window").width;

const Banner = () => {
  const [bannerData, setBannerDate] = useState([]);
  useEffect(() => {
    setBannerDate([
      "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
      "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
      "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
    ]);
    return () => {
      setBannerDate([]);
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper
          styele={{ height: windowWith }}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={2}
        >
          {bannerData.map((item) => {
            return (
              <Image
                key={item}
                style={styles.imageBanner}
                resizeMode="contain"
                source={{ uri: item }}
              />
            );
          })}
        </Swiper>
        <View style={{ height: 20 }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: windowWith,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: windowWith / 2,
    width: windowWith - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
export default Banner;
