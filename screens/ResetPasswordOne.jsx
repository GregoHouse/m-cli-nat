import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg";
import {useNavigation} from "@react-navigation/native"
import { useForm } from "react-hook-form";
import { ButtonCustom } from "../components/ButtonCustom";
import { InputCustom } from "../components/InputCustom";

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    }
})

export function ResetPasswordOne() {
    const { control, handleSubmit, setValue } = useForm()
    const navigation = useNavigation();
    function goToScreenLogin(){
        navigation.navigate("Login")
    }
    function goToScreenResetPwTeo(){
        navigation.navigate("ResetPasswordTwo")
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
                <View className="absolute left-[67] top-[145px]">
                    <Text className="text-white_text text-xl" style={styles.text}>
                        RESTAURAR CONTRASEÑA
                    </Text>
                </View>
                <View className="absolute left-4 top-[200] ">
                    <Text className="text-white_text text-base leading-7" style={styles.parrafo}>
                        introduce tu email y te enviaremos un codigo para que restaures tu contraseña.
                    </Text>
                </View>
                <View className=" w-[370px] h-[393] absolute top-[260] left-[11px]">
                    <View className="flex flex-col items-start gap-2">
                        <View className="space-y-1 mb-2">
                            <Text style={styles.text} className="text-white_text">
                                Email
                            </Text>
                            <InputCustom
                                placeholder={"E-mail"}
                                control={control}
                                name="useremail" 
                            />
                        </View>
                        <View className="w-[370px] h-[45px] mb-2">
                            <ButtonCustom
                                text="ENVIAR CODIGO"
                                style={styles.text}
                                onPress={goToScreenResetPwTeo}
                            />
                        </View>
                        <View className="flex flex-row space-x-2">
                            <View>
                                <Text style={styles.parrafo} className="text-white_text">
                                    ¿Ya tienes una cuenta?
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={goToScreenLogin}>
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