import { View, Text, Image, StatusBar, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg"
import {useNavigation} from "@react-navigation/native"

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    }
})

export function Register() {
    const navigation = useNavigation();

    function goToScreenLogin(){
        navigation.navigate("Login")
    }
    return (
        <>
            <StatusBar hidden={true} />
            <View className="h-full bg-background_login">
                <View className="absolute top-12 left-[50px]">
                    <Image
                        source={
                            logo
                        }
                        className="w-[294] h-[70px] "
                    />
                </View>
                <View className="absolute left-36 top-[145px]">
                    <Text className="text-white_text text-xl" style={styles.text}>
                        REGISTRO
                    </Text>
                </View>
                <View className=" w-[370px] h-[373] absolute top-60 left-[11px]">
                    <View className="flex flex-col items-start gap-3">
                        <View className="space-y-1">
                            <Text style={styles.text} className="text-white_text">
                                Nombre y Apellido
                            </Text>
                            <View className="bg-white w-[370px] h-[55px] rounded-lg items-stretch border-color_border">
                                <TextInput
                                    placeholder="Nombre y Apellido"
                                />
                            </View>
                        </View>
                        <View className="space-y-1">
                            <Text style={styles.text} className="text-white_text">
                                Email
                            </Text>
                            <View className="bg-white w-[370px] h-[55px] rounded-lg items-stretch border-color_border">
                                <TextInput
                                    placeholder="Email"
                                />
                            </View>
                        </View>
                        <View className="space-y-1 mb-2">
                            <Text style={styles.text} className="text-white_text">
                                Contraseña
                            </Text>
                            <View className="bg-white w-[370px] h-[55px] rounded-lg items-stretch border-color_border">
                                <TextInput
                                    placeholder="Contraseña"
                                />
                            </View>
                        </View>
                        <View className="w-[370px] h-[45px] mb-2">
                            <TouchableOpacity className=" bg-button_sesion_color w-full h-full rounded-lg flex justify-center items-center flex-row">
                                <Text className="text-white_text text-lg" style={styles.text}>
                                    REGISTRARME
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className="w-[370px] h-[98px] space-y-2">
                            <View className="flex flex-row space-x-1 ">
                                <Text className="text-white_text" style={styles.parrafo}>
                                    ¿Ya tienes una cuenta?
                                </Text>
                                <TouchableOpacity onPress={goToScreenLogin}>
                                    <Text className="text-button_sesion_color font-bold" style={styles.text}>
                                        Inicia sesion
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text className="text-button_sesion_color" style={styles.parrafo}>
                                        ¿Olvidates ti contraseña?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}