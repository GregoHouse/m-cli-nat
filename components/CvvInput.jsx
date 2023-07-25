import React from 'react';
import { View, TextInput, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Controller } from 'react-hook-form';

export function CvvInput({ control, name, placeholder, rules = {}, secureTextEntry, editable, keyboardType, multiline, numberOfLines, maxLength }) {

    // Función de formateo para agregar la barra en el formato ## / ##
    const formatCvv = (value) => {
        if (typeof value === 'string') {
            const cleanedValue = value.replace(/\D/g, ""); // Eliminamos caracteres no numéricos

            let formattedValue = cleanedValue.slice(0, 4); // Tomamos los primeros 4 caracteres

            return formattedValue;
        }
    };

    // Función de validación personalizada para verificar la longitud del input (3 o 4 caracteres)
    const cvvValid = (value) => {
        return /^\d{3,4}$/.test(value); // Aceptamos solo 3 o 4 números
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
                        validate: (value) => cvvValid(value) || "CVV inválido (debe contener 3 o 4 números)",
                    }}
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <View className={`w-[160px] h-[55px] rounded-xl  ${error ? "border-red-600 border-2" : "border border-1 border-solid border-[#F9F9F9F0]"} ${multiline ? "" : ""} px-13 py-19`}>
                                <TextInput
                                    style={{ color: "#F9F9F9F0" }}
                                    keyboardType={keyboardType}
                                    placeholder={placeholder}
                                    value={formatCvv(value)}
                                    onChangeText={(text) => {
                                        onChange(text);
                                    }}
                                    onBlur={onBlur}
                                    secureTextEntry={secureTextEntry}
                                    editable={editable}
                                    multiline={multiline || false}
                                    numberOfLines={numberOfLines}
                                    maxLength={4} // Establecemos la longitud máxima del input (máximo 4 caracteres)
                                />
                            </View>
                            {error && <Text className="text-red-700 font-semibold text-xs self-stretch ml-5 leading-3"> {error.message || `${placeholder} es Requerido`}</Text>}
                        </>
                    )}
                />
        </KeyboardAvoidingView>
    );
}
