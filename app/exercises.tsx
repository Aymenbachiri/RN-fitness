import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { fetchExercisesByBodyPart } from "../api/exerciseDB";
import { demoExercises } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExercisesList from "../components/ExercisesList";
import { ScrollView } from "react-native-virtualized-view";

export default function Exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercises, setExercises] = useState([]);
  // console.log("got item: ", item);

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodypart: any) => {
    let data = await fetchExercisesByBodyPart(bodypart);
    // console.log("got data: ", data);
    setExercises(data);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={
          item.image ||
          require("../assets/images/body-parts/back.jpg") || { uri: item.image }
        }
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* Exercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          className="font-semibold text-neutral-700"
          style={{ fontSize: hp(3) }}
        >
          {item.name} exercises
        </Text>
        <View className="mb-10">
          <ExercisesList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
