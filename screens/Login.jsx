import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import {useNavigation} from "@react-navigation/native"
import { InputCustom } from "../components/InputCustom";
import { ButtonCustom } from "../components/ButtonCustom";
import { AuthContextWithReducer } from "../context/AuthContextWithReducer";

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    }
})

export function Login() {
    const { control, handleSubmit, setValue } = useForm()
    const navigation = useNavigation();
    const {authState} = useContext(AuthContextWithReducer)
    console.log(authState.isLoggedIn)

    function goToScreenRegister(){
        navigation.navigate("Register")
    }
    function goToScreenResetPwOne(){
        navigation.navigate("ResetPasswordOne")
    }
    function goToScreenQuestionOne(){
        navigation.navigate("QuestionOne")
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
                {/* <Ionicons name="golf-outline" size={30} /> */}
                <View className="absolute left-28 top-[145px]">
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
                                secureTextEntry
                            />
                        </View>
                        <View className="w-[370px] h-[45px] mb-2">
                            <ButtonCustom
                                text="INICIAR SESION"
                                style={styles.text}
                                onPress={goToScreenQuestionOne}
                            />
                        </View>
                        <View className="w-[370px] h-[98px] space-y-2">
                            <View className="flex flex-row space-x-1">
                                <Text className="text-white_text" style={styles.parrafo}>
                                    ¿No tienes cuenta?
                                </Text>
                                <TouchableOpacity onPress={goToScreenRegister}>
                                    <Text className="text-button_sesion_color font-bold" style={styles.text}>
                                        Registrate
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
                        <View>
                            
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}