import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    }
})

export function Login() {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        <>
            <StatusBar hidden={true} />
            <View className="h-full bg-background_login">
                <View className="absolute top-16 left-[50px]">
                    <Image
                        source={
                            logo
                        }
                        className="w-[294] h-[70px] "
                    />
                </View>
                {/* <Ionicons name="golf-outline" size={30} /> */}
                <View className="absolute left-28 top-[165px]">
                    <Text className="text-white_text text-xl" style={styles.text}>
                        INICIO DE SESION
                    </Text>
                </View>
                <View className=" w-[370px] h-[373] absolute top-60 left-[11px]">
                    <View className="flex flex-col items-start gap-3">
                        <View className="space-y-1">
                            <Text style={styles.text} className="text-white_text">
                                Email
                            </Text>
                            <View className="bg-white w-[370px] h-[55px] rounded-lg items-stretch border-color_border">
                                <TextInput
                                    placeholder="E-Mail"
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
                        <View className="w-[370px] h-[50px] mb-2">
                            <TouchableOpacity className=" bg-button_sesion_color w-full h-full rounded-lg flex justify-center items-center flex-row">
                                <Text className="text-white_text text-lg" style={styles.text}>
                                    INICIAR SESION
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className="w-[370px] h-[98px] space-y-2">
                            <View className="flex flex-row space-x-1">
                                <Text className="text-white_text" style={styles.parrafo}>
                                    ¿No tienes cuenta?
                                </Text>
                                <TouchableOpacity>
                                    <Text className="text-button_sesion_color font-bold" style={styles.text}>
                                        Registrate
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