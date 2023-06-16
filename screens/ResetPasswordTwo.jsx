import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg";


const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    }
})

export function ResetPasswordTwo() {
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
                <View className="absolute left-[67] top-[145px]">
                    <Text className="text-white_text text-xl" style={styles.text}>
                        RESTAURAR CONTRASEÑA
                    </Text>
                </View>
                <View className="absolute left-4 top-[200] ">
                    <Text className="text-white_text text-base leading-7" style={styles.parrafo}>
                    introduce el codigo que enviamos a tu email y luego elige una nueva contraseña.
                    </Text>
                </View>
                <View className=" w-[370px] h-[393] absolute top-[260] left-[11px]">
                    <View className="flex flex-col items-start gap-2">
                        <View className="space-y-1">
                            <Text style={styles.text} className="text-white_text">
                                Codigo de verificacion
                            </Text>
                            <View className="bg-white w-[370px] h-[55px] rounded-lg items-stretch border-color_border">
                                <TextInput
                                    placeholder="Codigo de verificacion"
                                />
                            </View>
                        </View>
                        <View className="space-y-1">
                            <Text style={styles.text} className="text-white_text">
                                Nueva contraseña
                            </Text>
                            <View className="bg-white w-[370px] h-[55px] rounded-lg items-stretch border-color_border">
                                <TextInput
                                    placeholder="Nueva contraseña"
                                />
                            </View>
                        </View>
                        <View className="space-y-1 mb-2">
                            <Text style={styles.text} className="text-white_text">
                                Repite la nueva contraseña
                            </Text>
                            <View className="bg-white w-[370px] h-[55px] rounded-lg items-stretch border-color_border">
                                <TextInput
                                    placeholder="Repite la nueva contraseña"
                                />
                            </View>
                        </View>
                        <View className="w-[370px] h-[45px] mb-2">
                            <TouchableOpacity className=" bg-button_sesion_color w-full h-full rounded-lg flex justify-center items-center flex-row">
                                <Text className="text-white_text text-lg" style={styles.text}>
                                    RESTAURAR CONTRASEÑA
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className="w-[370px] h-[45px] mb-2">
                            <TouchableOpacity className="border-2 border-white w-full h-full rounded-lg flex justify-center items-center flex-row">
                                <Text className="text-white_text text-lg" style={styles.text}>
                                    REENVIAR CODIGO
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex flex-row space-x-2">
                            <View>
                                <Text style={styles.parrafo} className="text-white_text">
                                    ¿Ya tienes una cuenta?
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text className="font-bold text-button_sesion_color" style={styles.parrafo} >
                                        Inicia sesion
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