import { View, Image, StatusBar } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg"
import { useEffect, useState } from "react";
import {useNavigation} from "@react-navigation/native"

export function Start() {
    const navigation = useNavigation();
    
    function goToScreen(routeName){
        navigation.navigate(routeName)
    }

    useEffect(()=>{
        setTimeout(()=>{
            goToScreen("Login")
        }, 5000)
    },[])

    return (
        <>
            <StatusBar hidden={true} />
            <View className=" h-full bg-background_login">
                <View className="flex justify-center m-auto">
                    <Image
                        source={logo}
                        className="w-[350] h-[340]"
                    />
                </View>
            </View>
        </>
    )
}