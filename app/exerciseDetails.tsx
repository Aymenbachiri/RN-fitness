import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Anticons from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-virtualized-view";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseDetails() {
  const item: any = useLocalSearchParams();
  const router = useRouter();
  console.log("got items", item);

  return (
    <View className="flex flex-1 mt-[40px]">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px] mt-3">
        <Image
          source={{ uri: item.gifUrl || null }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-4 right-0"
      >
        <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      {/* Details */}
      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Equipment{" "}
          <Text className="font-bold text-neutral-800"> {item.equipment} </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Secondary Muscles{" "}
          <Text className="font-bold text-neutral-800">
            {item.secondaryMuscles}{" "}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Target
          <Text className="font-bold text-neutral-800"> {item.target}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          Instructions
        </Animated.Text>
        {item.instructions
          .split(",")
          .map((instruction: string, index: number) => {
            return (
              <Animated.Text
                entering={FadeInDown.delay((index + 6) * 100)
                  .duration(300)
                  .springify()}
                key={index}
                style={{ fontSize: hp(1.7) }}
                className="text-neutral-800"
              >
                {instruction}
              </Animated.Text>
            );
          })}
      </ScrollView>
    </View>
  );
}
