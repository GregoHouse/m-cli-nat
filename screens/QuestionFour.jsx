import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg";
import { useState } from "react";
import Icon from 'react-native-vector-icons/Fontisto';
import { ButtonCustom } from "../components/ButtonCustom";
import { useNavigation } from "@react-navigation/native";
import padeli from '../assets/icons/inactive/padel.png'
import tenisi from '../assets/icons/inactive/tenis.png'
import futboli from '../assets/icons/inactive/football.png';
import golfi from '../assets/icons/inactive/golf.png'
import basqueti from '../assets/icons/inactive/basquet.png'
import hockeyi from '../assets/icons/inactive/hockey.png'
import squashi from '../assets/icons/inactive/squash.png'

import padel from '../assets/icons/active/padel.png'
import tenis from '../assets/icons/active/tenis.png'
import futbol from '../assets/icons/active/football.png';
import golf from '../assets/icons/active/golf.png'
import basquet from '../assets/icons/active/basquet.png'
import hockey from '../assets/icons/active/hockey.png'
import squash from '../assets/icons/active/squash.png'


const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    },
})


export function QuestionFour() {
    const navigation = useNavigation();
    const sports = ['Padel', 'Tenis', 'Futbol', 'Golf', 'Basquet', 'Hockey', 'Squash'];
    const imageInactive = [padeli, tenisi, futboli, golfi, basqueti, hockeyi, squashi]
    const imageActive = [padel, tenis, futbol, golf, basquet, hockey, squash]
    const [selectedOptions, setSelectedOptions] = useState([]);
    const goToQuestionFive = () => {
        navigation.navigate('QuestionFive', { selectedOptions });
    };



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
        setSelectedOptions((prevOptions) => {
            if (prevOptions.includes(option)) {
                // La opción ya está seleccionada, la eliminamos del array
                return prevOptions.filter((item) => item !== option);
            } else {
                // La opción no está seleccionada, la agregamos al array
                return [...prevOptions, option];
            }
        });
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
                    <View className={`bg-linear_gradient1 absolute top-[205px] left-5 h-1 w-[250]`}>
                        <Text></Text>
                    </View>
                </View>
                <View className="absolute top-[198px] left-[350]">
                    <Text className="text-white_text text-xs">4/5</Text>
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
                {sports.map((sport, index) => (
                    <TouchableOpacity
                        onPress={() => setSelected(sport)}
                        className="mt-4"
                        key={index}
                    >
                        <View
                            className={`${open[sport.toLowerCase()]
                                ? "w-[119px] h-[64px] rounded-2xl border-2 border-white flex-row justify-between"
                                : "border-grey5_6 flex-row justify-between w-[119px] h-[64px] rounded-2xl border-2"
                                }`}
                        >
                            <View className="flex-1 items-center justify-center align-center">
                                <Image
                                    source={open[sport.toLowerCase()] ? imageActive[index] : imageInactive[index]}
                                    className="w-[24px] h-[24px]"
                                />
                                <Text
                                    className={`${open[sport.toLowerCase()]
                                        ? "text-white_text text-base flex flex-col text-center"
                                        : "text-base flex flex-col text-grey5_6 text-center"
                                        }`}
                                    style={styles.parrafo}
                                >
                                    {sport}
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