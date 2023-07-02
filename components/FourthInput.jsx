import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";

export function FourthInput({ control, name, placeholder, rules = {}, secureTextEntry, editable,
    multiline, numberOfLines, maxLength }) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View className={`w-[160] h-[55px] rounded-xl  ${error ? "border-red-600 border-2" : "border border-1 border-solid border-[#F9F9F9F0]"} ${multiline ? "" : ""} px-13 py-19`}>
                        <TextInputMask
                            style={{ textAlign: "center", color: "#F9F9F9F0" }}
                            keyboardType="numeric"
                            type={name === "CVV" ? "custom" : "credit-card"}
                            options={{
                                mask: name === "CVV" ? "9999" : "",
                            }}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                        />
                    </View>
                    {error && <Text className="text-red-700 font-semibold text-xs self-stretch ml-5 leading-3"> {error.message || `${placeholder} es Requerido`}</Text>}
                </>
            )}
        />
    );
}