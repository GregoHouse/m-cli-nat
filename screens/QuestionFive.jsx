import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Icon from 'react-native-vector-icons/Fontisto';
import { ButtonCustom } from "../components/ButtonCustom";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    },
    textCenter: {
        fontFamily: "Poppins-Regular",
        textAlign: "center"
    }
})


export function QuestionFive() {
    const navigation = useNavigation();
    const options = ['Padel', 'Tenis', 'Fútbol', 'Golf', 'Basquet', 'Hockey', 'Squash']
    const goToQuestionFive = () => navigation.navigate('QuestionFive');

    const [open, setOpen] = useState({
        tenis: false,
        padel: false,
        futbol: false,
        golf: false,
        basket: false,
        hockey: false,
        squash: false,

    });


    const setSelected = (option) => {
        setOpen((prevState) => ({
            ...prevState,
            [option.toLowerCase()]: !prevState[option.toLowerCase()],
        }));
    };

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
                    <View className={`bg-linear_gradient1 absolute top-[205px] left-5 h-1 w-[110]`}>
                        <Text></Text>
                    </View>
                </View>
                <View className="absolute top-[198px] left-[350]">
                    <Text className="text-white_text text-xs">5/5</Text>
                </View>
            </View>
            <View className="absolute top-[250]">
                <Text style={styles.text} className="text-white_text text-lg left-5">
                    ¿Qué deporte jugas?
                </Text>
            </View>
            <View className="absolute left-5 top-[300] ">
                <Text className="text-white_text text-base leading-7" style={styles.parrafo}>
                    Puedes elegir más de un deporte.
                </Text>
            </View>


            <View className="absolute top-[350] flex-1 flex-row flex-wrap gap-4">
                {options.map((option, index) => (
                    <TouchableOpacity onPress={() => setSelected(option)} className="mt-4" key={index}>
                        <View className={`${open[option.toLowerCase()] ? "w-[119px] h-[64px] rounded-2xl border-2 border-white flex-row justify-between" : "border-grey5_6 flex-row justify-between w-[119px] h-[64px] rounded-2xl border-2"}`}>
                            <View className="flex-1 items-center justify-center align-center">
                                <Text className={`${open[option.toLowerCase()] ? "text-white_text text-base flex flex-col text-center" : "text-base flex flex-col text-grey5_6 text-center"}`} style={styles.parrafo}>
                                    {option}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <View className="absolute left-5 top-[600]">
                <Text className="text-button_sesion_color" style={styles.parrafo}>
                    Pronto más deportes disponibles.
                </Text>
            </View>
            <View className="absolute top-[650] left-3 w-[370px] h-[45px]">
                {
                    Object.values(open).some(value => value) ?  
                        <ButtonCustom
                            onPress={goToQuestionFive}
                            text="Siguiente"
                            style={styles.text}
                        /> :
                        <ButtonCustom
                            text="Siguiente"
                            style={styles.text}
                            disabled={true}
                        />
                }
            </View>

        </View>
    )
}