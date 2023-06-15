import { View, Image, StatusBar } from "react-native";
import logo from "../assets/images/icono_logo_matching_-_oscuro.jpg"

export function Start() {
    return (
        <>
            <StatusBar hidden={true} />
            <View className=" h-full bg-background_login">
                <View className="flex justify-center m-auto">
                    <Image
                        source={logo}
                        className="w-[350] h-[340]"
                    />
                </View>
            </View>
        </>
    )
}