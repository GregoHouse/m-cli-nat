import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

export function  NameInput({ control, name, placeholder, rules = {}, secureTextEntry, editable, keyboardType
    ,multiline, numberOfLines, maxLength }) {
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
                            onChangeText={onChange}
                            onBlur={onBlur}
                            secureTextEntry={secureTextEntry}
                            editable={editable}
                            multiline={multiline || false}
                            numberOfLines={numberOfLines}
                            maxLength={maxLength}

                        />
                    </View>
                    {error && <Text className="text-red-700 font-semibold text-xs self-stretch ml-5 leading-3"> {error.message || `${placeholder} es Requerido`}</Text>}
                </>
            )}
        />

    )
}