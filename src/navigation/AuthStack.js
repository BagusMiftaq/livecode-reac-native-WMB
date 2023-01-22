import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import Login from "../screen/Login/Login";
import Logout from "../screen/Logout/Logout";


const Stack = createStackNavigator();

const AuthStack=()=>{
    return(
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}>
            <Stack.Screen
                name={"Login"}
                component={Login}/>
            <Stack.Screen
                name={"Logout"}
                component={Logout}/>
        </Stack.Navigator>
    )
}

export default AuthStack;

