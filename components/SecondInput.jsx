import { useState } from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
// import { PaymentIcon } from "react-native-payment-icons";


export function SecondInput({ control, name, placeholder, rules = {}, secureTextEntry, editable, keyboardType
    , multiline, numberOfLines, maxLength, minLength }) {
    const [cardBrand, setCardBrand] = useState("");

    const getCardBrand = (creditCardNumber) => {
        // Identificar la marca de la tarjeta en función del número de tarjeta ingresado
        // Agregar más marcas de tarjetas según sea necesario
        if (/^4/.test(creditCardNumber)) {
            return "Visa";
        } else if (/^5/.test(creditCardNumber)) {
            return "MasterCard";
        } else if (/^3/.test(creditCardNumber)) {
            return "Amex";
        } else {
            return "Desconocido";
        }
    };

    const handleCreditCardChange = (creditCardNumber) => {
        // Eliminar espacios o caracteres no numéricos del número de tarjeta
        creditCardNumber = creditCardNumber.replace(/\s/g, "");
        // Realizar la identificación de la marca de la tarjeta
        setCardBrand(getCardBrand(creditCardNumber));
        // Puedes realizar otras validaciones o lógicas relacionadas con la tarjeta aquí
    };
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View className={`w-[370] h-[55px] rounded-xl  ${error ? "border-red-600 border-2" : "border border-1 border-solid border-[#F9F9F9F0]"} ${multiline ? "" : ""} px-13 py-19`}>
                        <TextInput
                            style={{ color: "#F9F9F9F0" }}
                            keyboardType={keyboardType}
                            placeholder={placeholder}
                            value={value}
                            onChangeText={(text) => {
                                onChange(text); // Update the input value
                                handleCreditCardChange(text); // Pass the credit card number to the handler
                            }}
                            onBlur={onBlur}
                            secureTextEntry={secureTextEntry}
                            editable={editable}
                            multiline={multiline || false}
                            numberOfLines={numberOfLines}
                            maxLength={maxLength}
                            minLength={minLength}

                        />
                    </View>
                    {value && cardBrand !== "Desconocido" && (
                        {/* <PaymentIcon type={cardBrand.toLowerCase()} /> */}
                    )}
                    {error && <Text className="text-red-700 font-semibold text-xs self-stretch ml-5 leading-3"> {error.message || `${placeholder} es Requerido`}</Text>}
                </>
            )}
        />

    )
}


