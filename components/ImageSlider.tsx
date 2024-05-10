import React from "react";
import { View, Text } from "react-native";
import Carousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from "react-native-snap-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
  const renderItem = (
    { item, index }: { item: any; index: number },
    parallaxProps?: AdditionalParallaxProps
  ) => {
    return <ItemCard item={item} index={index} ParallaxProps={parallaxProps} />;
  };
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={renderItem}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 80}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
}
type ItemProps = {
  item: any;
  index: number;
  ParallaxProps?: AdditionalParallaxProps;
};

const ItemCard = ({ item, index, ParallaxProps }: ItemProps) => {
  return (
    <View style={{ width: wp(100) - 80, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain", borderRadius: 30 }}
        parallaxFactor={2}
        {...ParallaxProps}
      />
    </View>
  );
};
