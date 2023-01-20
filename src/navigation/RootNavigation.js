import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import AuthStack from "./AuthStack";
import Splash from "../screen/Splash/Splash";

const Stack = createStackNavigator();

export const RootNavigation =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}>
                <Stack.Screen name={"Splash"} component={Splash}/>
                <Stack.Screen name={"Auth"} component={AuthStack}/>
                <Stack.Screen name={"Main"} component={BottomTab}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}