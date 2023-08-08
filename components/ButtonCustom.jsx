import { Text, TouchableOpacity } from "react-native";

export function ButtonCustom({ onPress, text, style, disabled}) {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} className={`${!disabled ? "bg-button_sesion_color w-full h-full rounded-lg flex justify-center items-center flex-row" : "bg-grey5_6 w-full h-full rounded-lg flex justify-center items-center flex-row"}`}>
            <Text className="text-white_text text-lg" style={style}>{text}</Text>
        </TouchableOpacity>
    )
}