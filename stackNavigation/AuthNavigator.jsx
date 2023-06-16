
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { ResetPasswordOne } from "../screens/ResetPasswordOne";
import { ResetPasswordTwo } from "../screens/ResetPasswordTwo";
import { Start } from "../screens/Start";


const Stack = createStackNavigator()

export function AuthNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Start" component={Start}/>
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
            <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
            <Stack.Screen options={{headerShown: false}} name="ResetPasswordOne" component={ResetPasswordOne}/>
            <Stack.Screen options={{headerShown: false}} name="ResetPasswordTwo" component={ResetPasswordTwo}/>
        </Stack.Navigator>
    )
}