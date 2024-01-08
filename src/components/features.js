import { View, Text } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { Image } from 'react-native';

export default function Features() {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">Features</Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require("../../assets/images/chatgptIcon.png")}
          style={{ width: hp(4), height: hp(4) }}></Image>
          <Text style={{fontSize: wp(4.8)}} className="font-semibold text-gray-700">ChatGPT</Text>
          
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">ChatGPT is an artificial intelligence chatbot that uses natural language processing to create humanlike conversational dialogue.</Text>
      </View>
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require("../../assets/images/dalleIcon.png")}
          style={{ width: hp(4), height: hp(4) }}></Image>
          <Text style={{fontSize: wp(4.8)}} className="font-semibold text-gray-700">DALL-E2</Text>
          
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">DALL·E 2 is an AI system that can create realistic images and art from a description in natural language.</Text>
      </View>
      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
            <Image source={require("../../assets/images/smartaiIcon.png")}
          style={{ width: hp(4), height: hp(4) }}></Image>
          <Text style={{fontSize: wp(4.8)}} className="font-semibold text-gray-700">Smart-AI</Text>
          
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">Smart AI, short for Smart Artificial Intelligence, represents the next generation of intelligent systems</Text>
      </View>
    </View>
  )
}