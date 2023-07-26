
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { ResetPasswordOne } from "../screens/ResetPasswordOne";
import { ResetPasswordTwo } from "../screens/ResetPasswordTwo";
import { Start } from "../screens/Start";
import { QuestionOne } from "../screens/QuestionOne";
import { QuestionTwo } from "../screens/QuestionTwo"
import { QuestionThree } from "../screens/QuestionThree";
import { QuestionFour } from "../screens/QuestionFour";
import { QuestionFive } from "../screens/QuestionFive";
import { ReservaCancha } from "../screens/ReservaCancha";
import AddFriendScreen from "../screens/AddFriendScreen";
import FriendsScreen from "../screens/FriendsScreen";



const Stack = createStackNavigator()

export function AuthNavigator(){
    return(
        <Stack.Navigator>
            {/* <Stack.Screen options={{headerShown: false}} name="Start" component={Start}/>
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
            <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
            <Stack.Screen options={{headerShown: false}} name="ResetPasswordOne" component={ResetPasswordOne}/>
            <Stack.Screen options={{headerShown: false}} name="ResetPasswordTwo" component={ResetPasswordTwo}/>
            <Stack.Screen options={{headerShown: false}} name="QuestionOne" component={QuestionOne}/>
            <Stack.Screen options={{headerShown: false}} name="QuestionTwo" component={QuestionTwo}/>
            <Stack.Screen options={{headerShown: false}} name="QuestionThree" component={QuestionThree}/>
            <Stack.Screen options={{headerShown: false}} name="QuestionFour" component={QuestionFour}/>
            <Stack.Screen options={{headerShown: false}} name="QuestionFive" component={QuestionFive}/>
            <Stack.Screen options={{headerShown: false}} name="ReservaCancha" component={ReservaCancha}/> */}
            <Stack.Screen options={{title: 'Mis amigos'}} name="FriendsScreen" component={FriendsScreen}/>
            <Stack.Screen options={{title: 'Agregar amigo'}} name="AddFriendScreen" component={AddFriendScreen}/>
        </Stack.Navigator>
    )
}