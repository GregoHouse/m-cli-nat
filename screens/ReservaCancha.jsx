import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg";
import { SecondInput } from "../components/SecondInput";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { ThirdInput } from "../components/ThirdInput";
import { FourthInput } from "../components/FourthInput";
import { ButtonCustom } from "../components/ButtonCustom";
import { useState } from "react";



const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins-Bold"
    },
    parrafo: {
        fontFamily: "Poppins-Regular"
    },
})
export function ReservaCancha() {
    const navigation = useNavigation();
    const { control, handleSubmit, setValue } = useForm()
    const [isFormComplete, setIsFormComplete] = useState(false);
    const goToQuestionFour = () => {
        navigation.navigate('QuestionFour');
    };

    const isFormValid = (isValid) => {
        setIsFormComplete(isValid);
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
                    <View className={`bg-linear_gradient1 absolute top-[205px] left-5 h-1 w-[110]`}>
                        <Text></Text>
                    </View>
                </View>
                <View className="absolute top-[198px] left-[350]">
                    <Text className="text-white_text text-xs">4/6</Text>
                </View>
            </View>
            <View className="absolute left-[20] top-[250px]">
                <Text className="text-white_text text-lg" style={styles.text}>
                    Método de pago:
                </Text>
            </View>
            <View className=" w-[385] h-[55] absolute top-[300] left-[11px]">
                <View className="flex flex-col items-start gap-3">
                    <View className="space-y-1">
                        <Text style={styles.parrafo} className="text-white_text mb-1">
                            Nombre completo
                        </Text>
                        <View>

                            <SecondInput
                                control={control}
                                name="name&sirName"
                            />
                        </View>
                    </View>
                    <View className="space-y-1">
                        <Text style={styles.parrafo} className="text-white_text mb-1">
                            Número de Tarjeta
                        </Text>
                        <SecondInput
                            keyboardType="numeric"
                            control={control}
                            name="creditCard"
                        />
                    </View>
                </View>
            </View>
            <View className="flex-row space-x-12 w-[160] h-[55] absolute top-[500] left-[11px]">
                <View className="flex flex-col items-start gap-3">
                    <View className="space-y-1">
                        <Text style={styles.parrafo} className="text-white_text mb-1">
                            Fecha de expiración
                        </Text>
                        <View>

                            <ThirdInput

                                control={control}
                                name="expirationDate"
                            />
                        </View>
                    </View>
                </View>

                <View className="space-y-1">
                    <Text style={styles.parrafo} className="text-white_text mb-1">
                        CVV
                    </Text>
                    <View>
                        <FourthInput
                            control={control}
                            name="CVV"
                        />
                    </View>
                </View>
            </View>
                <View className="absolute top-[650] left-3 w-[370px] h-[45px]">
                    <ButtonCustom
                        onPress={goToQuestionFour}
                        text="Siguiente"
                        style={styles.text}
                        disabled={!isFormComplete}

                    />
                </View>


        </View>
    )

}

