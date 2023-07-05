import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg";
import Icon from 'react-native-vector-icons/Entypo';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    }
})
export function QuestionOne() {
    const navigation = useNavigation();

    const [femenino, setFemenino] = useState(false)
    const [masculino, setMasculino] = useState(false)
    const [noDecirlo, setNoDecirlo] = useState(false)

    function setSelectOptionFemenino() {
        setFemenino(true)
        setMasculino(false)
        setNoDecirlo(false)
        setTimeout(() => {
            navigation.navigate("QuestionTwo")
        }, 500)

    }
    function setSelectOptionMasculino() {
        setFemenino(false)
        setMasculino(true)
        setNoDecirlo(false)
        setTimeout(() => {
            navigation.navigate("QuestionTwo")
        }, 500)
    }
    function setSelectOptionNoDecirlo() {
        setFemenino(false)
        setMasculino(false)
        setNoDecirlo(true)
        setTimeout(() => {
            navigation.navigate("QuestionTwo")
        }, 500)
    }

    return (
        <View className="h-full bg-background_login">
            <View className="absolute top-12 left-[50px]">
                <Image
                    source={
                        logo
                    }
                    className="w-[294] h-[70px] "
                />
            </View>
            <View className="absolute left-[20] top-[140px]">
                <Text className="text-white_text text-lg" style={styles.text}>
                    Ayudanos a completar tu perfil
                </Text>
            </View>
            <View >
                <View>
                    <View className="bg-black absolute top-[205px] left-5 h-1 w-[316]">
                        <Text></Text>
                    </View>
                    <View className={`bg-linear_gradient1 absolute top-[205px] left-5 h-1 w-[75]`}>
                        <Text></Text>
                    </View>
                </View>
                <View className="absolute top-[198px] left-[350]">
                    <Text className="text-white_text text-xs">1/6</Text>
                </View>
            </View>
            <View className="absolute top-[250]">
                <Text style={styles.text} className="text-white_text text-lg left-5">
                    ¿Cúal es tu genero?
                </Text>
            </View>
            <View className="absolute top-[280]">
                <TouchableOpacity className="mt-4" onPress={setSelectOptionFemenino}>
                    <View className={`${femenino ? "w-[350px] h-14 left-5 rounded-2xl border-2 border-white flex-row justify-between" : "border-grey5_6 flex-row justify-between w-[350px] h-14 left-5 rounded-2xl border-2"}`}>
                        <View className="justify-center pl-3 ">
                            <Text className={`${femenino ? "text-white_text text-base" : "text-base text-grey5_6"}`} style={styles.parrafo}>Femenino</Text>
                        </View>
                        {
                            femenino ?
                                (
                                    <View className="justify-center pr-3">
                                        <Icon name="check" size={30} color={"white"} />
                                    </View>
                                ) :
                                null
                        }
                    </View>
                </TouchableOpacity>
            </View>
            <View className="absolute top-[355]">
                <TouchableOpacity className="mt-4" onPress={setSelectOptionMasculino}>
                    <View className={`${masculino ? "w-[350px] h-14 left-5 rounded-2xl border-2 border-white flex-row justify-between" : "border-grey5_6 flex-row justify-between w-[350px] h-14 left-5 rounded-2xl border-2"}`}>
                        <View className="justify-center pl-3 ">
                            <Text className={`${masculino ? "text-white_text text-base" : "text-base text-grey5_6"}`} style={styles.parrafo}>Masculino</Text>
                        </View>
                        {
                            masculino ?
                                (
                                    <View className="justify-center pr-3">
                                        <Icon name="check" size={30} color={"white"} />
                                    </View>
                                ) :
                                null
                        }
                    </View>
                </TouchableOpacity>
            </View>
            <View className="absolute top-[430]">
                <TouchableOpacity className="mt-4" onPress={setSelectOptionNoDecirlo}>
                    <View className={`${noDecirlo ? "w-[350px] h-14 left-5 rounded-2xl border-2 border-white flex-row justify-between" : "border-grey5_6 flex-row justify-between w-[350px] h-14 left-5 rounded-2xl border-2"}`}>
                        <View className="justify-center pl-3 ">
                            <Text className={`${noDecirlo ? "text-white_text text-base" : "text-base text-grey5_6"}`} style={styles.parrafo}>Prefiero no decirlo</Text>
                        </View>
                        {
                            noDecirlo ?
                                (
                                    <View className="justify-center pr-3">
                                        <Icon name="check" size={30} color={"white"} />
                                    </View>
                                ) :
                                null
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}