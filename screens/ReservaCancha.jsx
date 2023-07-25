import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg";
import { SecondInput } from "../components/SecondInput";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from "../components/ButtonCustom";
import { useEffect, useState } from "react";
import { ThirdInput } from "../components/ThirdInput";
import { CvvInput } from "../components/CvvInput";
import { PaymentIcon } from 'react-native-payment-icons'
import { NameInput } from "../components/NameInput";



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

    const goToLogin = () => {
        navigation.navigate('Login');
    };

    const [cardBrand, setCardBrand] = useState("");



    // Función para identificar la marca de la tarjeta
    const identifyCardBrand = (creditCardNumber) => {
        // Visa: comienza con 4
        if (/^4/.test(creditCardNumber)) {
            setCardBrand("Visa");
        }
        // MasterCard: comienza con 5
        else if (/^5/.test(creditCardNumber)) {
            setCardBrand("MasterCard");
        }
        // American Express (Amex): comienza con 34 o 37
        else if (/^3[47]/.test(creditCardNumber)) {
            setCardBrand("Amex");
        }
        // Agrega más marcas de tarjetas según sea necesario

        // Si no coincide con ninguna marca conocida, se puede establecer una marca predeterminada o dejarlo en blanco
        else {
            setCardBrand("mastercard");
        }
    };

    const handleCreditCardChange = (creditCardNumber) => {
        // Eliminar espacios o caracteres no numéricos del número de tarjeta
        creditCardNumber = creditCardNumber.replace(/\s/g, "");
        // Realizar la identificación de la marca de la tarjeta
        identifyCardBrand(creditCardNumber);
        // Puedes realizar otras validaciones o lógicas relacionadas con la tarjeta aquí
    };


    const isFormValid = (isValid) => {
        setIsFormComplete(isValid);
    };

    console.log(cardBrand)


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
                            <NameInput
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
                            control={control}
                            name="creditCardNumber"
                            maxLength={16}
                            minLength={13}
                            keyboardType="numeric"
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
                                keyboardType="numeric"
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
                        <CvvInput
                            keyboardType="numeric"
                            control={control}
                            name="CVV"

                        />
                    </View>
                </View>
            </View>
            <View className="absolute top-[650] left-3 w-[370px] h-[45px]">
                <ButtonCustom
                    onPress={handleSubmit(goToLogin)} // Llamar a handleSubmit para validar el formulario antes de continuar
                    text="Siguiente"
                    style={styles.text}
                    disabled={!isFormComplete} // Utilizar isFormComplete en lugar de isFormValid
                />
            </View>
        </View>
    )

}

