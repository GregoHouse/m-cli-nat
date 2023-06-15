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

export function ResetPasswordOne() {
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
                <View className="absolute left-[67] top-[165px]">
                    <Text className="text-white_text text-xl" style={styles.text}>
                        RESTAURAR CONTRASEÑA
                    </Text>
                </View>
                <View className="absolute left-4 top-64 ">
                    <Text className="text-white_text text-base leading-7" style={styles.parrafo}>
                        introduce tu email y te enviaremos un codigo para que restaures tu contraseña.
                    </Text>
                </View>
            </View>
        </>
    )
}