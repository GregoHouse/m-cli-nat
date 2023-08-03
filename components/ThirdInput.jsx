import React from 'react';
import { View, TextInput, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Controller } from 'react-hook-form';

export function ThirdInput({ control, name, placeholder, rules = {}, secureTextEntry, editable, keyboardType, multiline, numberOfLines, maxLength }) {

    // Función de formateo para agregar la barra en el formato ## / ##
    const formatExpirationDate = (value) => {
        if (typeof value === 'string') {
            const cleanedValue = value.replace(/\D/g, ""); // Eliminamos caracteres no numéricos

            let formattedValue = cleanedValue.slice(0, 2); // Tomamos los primeros dos caracteres

            if (cleanedValue.length > 2) {
                formattedValue += " / " + cleanedValue.slice(2); // Agregamos la barra "/" y el resto de los caracteres
            }

            return formattedValue;
        };
    }

    // Función de validación personalizada para verificar el formato de fecha de expiración (## / ##)
    const isExpirationDateValid = (value) => {
        return /^\d{2} ?\/ ?\d{0,2}$/.test(value); // Permitimos 0 o 1 número después de la barra, y opcionalmente espacios alrededor de la barra
    };

    return (
        <KeyboardAvoidingView // Usamos KeyboardAvoidingView para ajustar la altura del contenido en Android
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Comportamiento en iOS: empujar contenido hacia arriba; en Android: ajustar la altura del contenido
            style={{ flex: 1 }} // Aseguramos que el componente se expanda para ocupar el espacio disponible
        >
                <Controller
                    control={control}
                    name={name}
                    rules={{
                        ...rules,
                        // Agregamos la regla de validación personalizada
                        validate: (value) => isExpirationDateValid(value) || "Fecha de expiración inválida (use el formato ## / ##)",
                    }}
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <View className={`w-[160px] h-[55px] rounded-xl  ${error ? "border-red-600 border-2" : "border border-1 border-solid border-[#F9F9F9F0]"} ${multiline ? "" : ""} px-13 py-19`}>
                                <TextInput
                                    style={{ color: "#F9F9F9F0" }}
                                    keyboardType={keyboardType}
                                    placeholder={placeholder}
                                    value={formatExpirationDate(value)}
                                    onChangeText={(text) => {
                                        onChange(text);
                                    }}
                                    onBlur={onBlur}
                                    secureTextEntry={secureTextEntry}
                                    editable={editable}
                                    multiline={multiline || false}
                                    numberOfLines={numberOfLines}
                                    maxLength={7} // Establecemos la longitud máxima del input (incluyendo la barra "/")
                                />
                            </View>
                            {error && <Text className="text-red-700 font-semibold text-xs self-stretch ml-5 leading-3"> {error.message || `${placeholder} es Requerido`}</Text>}
                        </>
                    )}
                />
        </KeyboardAvoidingView>
    );
}


