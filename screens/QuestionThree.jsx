import { Text, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg";
import Icon from 'react-native-vector-icons/Ionicons';
import { useForm } from "react-hook-form";
import { InputCustom } from "../components/InputCustom";
import { ButtonCustom } from "../components/ButtonCustom";


const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    }
})

export function QuestionThree() {
    const { control, setValue } = useForm()
    const navigation = useNavigation();



    function goToScreenQuestionFour(){
        navigation.navigate("QuestionFour")
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
                    <View className={`bg-linear_gradient1 absolute top-[205px] left-5 h-1 w-[160]`}>
                        <Text></Text>
                    </View>
                </View>
                <View className="absolute top-[198px] left-[350]">
                    <Text className="text-white_text text-xs">3/5</Text>
                </View>
            </View>
            <View className="absolute top-[250]">
                <Text style={styles.text} className="text-white_text text-lg left-5">
                    Completa con tu direccion:
                </Text>
            </View>
            <View className="absolute">
                <View className="w-[350px] h-14 left-5 top-[300] rounded-2xl border-2 border-white flex-row justify-between">
                    <View className="justify-center pl-3">

                    </View>
                    <View className="justify-center mr-3">
                        <Icon name="location-outline" size={25} color={"white"} />
                    </View>
                </View>
            </View>
            <View className="absolute top-[380]">
                <Text style={styles.text} className="text-white_text text-lg left-5">
                    Tu número de telefono:
                </Text>
            </View>
            <View className="absolute top-[550] left-3 w-[370px] h-[45px]">
                    {
                
                            <ButtonCustom
                                onPress={goToScreenQuestionFour}
                                text="Siguiente"
                                style={styles.text}
                           
                            /> 
                           
                    }
                </View> 

        </View>
    )
}