import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg";
import DatePicker from 'react-native-modern-datepicker';
import { useState } from "react";
import Icon from 'react-native-vector-icons/Fontisto';
import { ButtonCustom } from "../components/ButtonCustom";
import { useNavigation } from "@react-navigation/native"

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    }
})


export function QuestionTwo() {
    const navigation = useNavigation();
    const [date, setDate] = useState("")
    const [open, setOpen] = useState(false)
    const hoy = new Date().toISOString().split("T").shift()

    const goToQuestionThree = () => navigation.navigate('QuestionThree');

    function goToScreenQuestionThree(){
        navigation.navigate("QuestionThree")
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
                    <View className={`bg-linear_gradient1 absolute top-[205px] left-5 h-1 w-[110]`}>
                        <Text></Text>
                    </View>
                </View>
                <View className="absolute top-[198px] left-[350]">
                    <Text className="text-white_text text-xs">2/5</Text>
                </View>
            </View>
            <View className="absolute top-[250]">
                <Text style={styles.text} className="text-white_text text-lg left-5">
                    ¿Cúal es tu fecha de nacimiento?
                </Text>
            </View>
            <View className="absolute top-[280]">
                <Modal
                    visible={open}
                    animationType="slide"
                    transparent={true}
                >
                    <View className="absolute top-[280] left-[35]">
                        <DatePicker
                            onSelectedChange={date => setDate(date)}
                            options={{
                                backgroundColor: '#090C08',
                                textHeaderColor: '#FFA25B',
                                textDefaultColor: '#F6E7C1',
                                selectedTextColor: '#fff',
                                mainColor: '#F4722B',
                                textSecondaryColor: '#D6C7A1',
                                borderColor: 'rgba(122, 146, 165, 0.1)',
                            }}
                            maximumDate={hoy}
                            current="2023-06-19"
                            selected={`${date}`}
                            mode="calendar"
                            minuteInterval={30}
                            style={{ borderRadius: 10, }}
                            className="w-80"
                        />
                        <TouchableOpacity onPress={() => setOpen(false)} className="absolute top-[310] left-36">
                            {
                                date ?
                                    <Text className="text-white_text right-2">
                                        Confirmar
                                    </Text>
                                    :
                                    <Text className="text-white_text">
                                        Cerrar
                                    </Text>
                            }
                        </TouchableOpacity>
                    </View>
                </Modal>
                <View className="absolute">
                    <TouchableOpacity className="mt-4" onPress={() => setOpen(true)}>
                        <View className="w-[350px] h-14 left-5 rounded-2xl border-2 border-white flex-row justify-between">
                            <View className="justify-center pl-3 ">
                                {
                                    date ?
                                        (
                                            <Text className="text-white_text text-base" style={styles.parrafo}>{date}</Text>
                                        )
                                        :
                                        <Text className="text-white_text text-base" style={styles.parrafo}>--/--/----</Text>
                                }
                            </View>
                            <View className="justify-center mr-3">
                                <Icon name="date" size={25} color={"white"} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="absolute top-[370] left-3 w-[370px] h-[45px]">
                    {
                        date ?
                            <ButtonCustom
                                onPress={goToQuestionThree}
                                text="Siguiente"
                                style={styles.text}
                                onPress={goToScreenQuestionThree}
                            /> :
                            <ButtonCustom
                                text="Siguiente"
                                style={styles.text}
                                disabled={true}
                            />
                    }
                </View>
            </View>
        </View>
    )
}