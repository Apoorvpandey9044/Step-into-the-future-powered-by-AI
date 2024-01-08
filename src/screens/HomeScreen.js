import { View, Text, ScrollView, Touchable, TouchableOpacity, FlatListComponent } from 'react-native'
import React, { useState } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import Features from '../components/features';
import { dummyMessages } from '../constants';

export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
    const [recording, setRecording] = useState(false);
    const [speaking, setSpeaking] = useState(true);

    const clear =()=>{
        setMessages([]);
    }
    const stopSpeaking =()=>{
        setSpeaking(false);
    }
  return (
    <View className="flex-1 bg-white">
        <SafeAreaView className="flex-1 flex mx-5">
      <View className="flex-row justify-center">
        <Image source={require("../../assets/images/bot.png")}
          style={{ width: hp(15), height: hp(15) }}></Image>
      </View>

      {
        messages.length>0?(
            <View className="space-y-2 flex-1">
                <Text style={{fontSize: wp(5)}}className="text-gray-700 font-semibold ml-1">Assistant</Text>
                <View style={{height: hp(60)}}className="bg-neutral-200 rounded-3xl p-4">
                    <ScrollView bounces={false}className="space-y-4"showsVerticalScrollIndicator={false}>
                        {
                            messages.map((message,index)=>{
                               if(message.role=='assistant'){
                                if(message.content.includes('https')){
                                    // its an ai image
                                    return(
                                        <View key={index}className="flex-row justify-start">
                                        <View className="p-2 rounded-2xl bg-emerald-100 rounded-tl-none">
                                            <Image source={{uri: message.content}}className="rounded-2xl"resizeMode='contain'style={{height: wp(60), width: wp(60)}}></Image>
                                        </View>
                                    </View>
                                    )
                                }else{
                                    //text image
                                    
                                            <View
                                            key={index}
                                            style={{width: wp(70)}}className="bg-emerald-100 rounded-xl p-2 rounded-tl-none">
                                                <Text>
                                                    {message.content}
                                                </Text>
                                            </View>
                                        
                                }
                            }else{
                                      return(
                                        <View key={index} className="flex-row justify-end">
                                            <View
                                            style={{width: wp(70)}}className="bg-white rounded-xl p-2 rounded-tr-none">
                                                <Text>
                                                    {message.content}
                                                </Text>
                                            </View>
                                        </View>
                                      )
                                }
                               
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        ):(
            <Features />
        )
      }
      <View className="flex justify-center items-center">
        {
        recording?(
            <TouchableOpacity>
            <Image className="rounded-full"source={require('../../assets/images/voiceLoading.gif')}style={{width: hp(15), height: hp(15)}} />
        </TouchableOpacity>
        ):(
            <TouchableOpacity>
            <Image className="rounded-full"source={require('../../assets/images/recordingIcon.png')}style={{width: hp(15), height: hp(15)}} />
        </TouchableOpacity>
        )
}
{
    messages.length>0 && (
        <TouchableOpacity onPress={clear} className="bg-neutral-400 rounded-2xl p-2 absolute right-8">
            <Text className="text-white font-semibold">Clear</Text>
        </TouchableOpacity>
    )
}
{
    speaking && (
        <TouchableOpacity onPress={stopSpeaking} className="bg-red-400 rounded-2xl p-2 absolute left-8">
            <Text className="text-white font-semibold">Stop</Text>
        </TouchableOpacity>
    )
}
      </View>
    </SafeAreaView>
    </View>
    
  )
}