import { View, Text, Image, StatusBar, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg"
import {useNavigation} from "@react-navigation/native"
import { InputCustom } from "../components/InputCustom";
import { useForm } from "react-hook-form";
import { ButtonCustom } from "../components/ButtonCustom";

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    }
})

export function Register() {
    const { control, handleSubmit, setValue } = useForm()
    const navigation = useNavigation();

    function goToScreenLogin(){
        navigation.navigate("Login")
    }
    function goToScreenResetPwOne(){
        navigation.navigate("ResetPasswordOne")
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
                            <Text style={styles.text} className="text-white_text mb-1">
                                Nombre y Apellido
                            </Text>
                            <InputCustom
                                placeholder="Nombre y Apellido"
                                control={control}
                                name="name&lastname"                            
                            />
                        </View>
                        <View className="space-y-1">
                            <Text style={styles.text} className="text-white_text mb-1">
                                Email
                            </Text>
                            <InputCustom
                                placeholder="E-mail"
                                control={control}
                                name="useremail"                            
                            />
                        </View>
                        <View className="space-y-1 mb-2">
                            <Text style={styles.text} className="text-white_text">
                                Contraseña
                            </Text>
                            <InputCustom
                                placeholder="Contraseña"
                                control={control}
                                name="userpassword"
                            />
                        </View>
                        <View className="w-[370px] h-[45px] mb-2">
                            <ButtonCustom
                                text="REGISTRARME"
                                style={styles.text}
                            />
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
                                <TouchableOpacity onPress={goToScreenResetPwOne}>
                                    <Text className="text-button_sesion_color" style={styles.parrafo}>
                                        ¿Olvidates tu contraseña?
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