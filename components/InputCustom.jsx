import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

export function InputCustom({control, name, placeholder, rules={}, secureTextEntry, editable,
    multiline, numberOfLines, maxLength}){
    return(
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field:{value, onChange, onBlur}, fieldState:{error}})=>(
                    <>
                        <View className={`bg-white w-[370px] h-[55px] rounded-lg items-stretch border-color_border ${error ? "border-red-600 border-2" : "border-4 border-white"} ${multiline? "" : ""}`}>
                            <TextInput 
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