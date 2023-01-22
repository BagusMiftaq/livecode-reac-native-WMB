import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import MenuList from "../screen/MenuList/MenuList";
import AddMenu from "../screen/AddMenu/AddMenu";
import EditMenu from "../screen/EditMenu/EditMenu";

const Stack = createStackNavigator();
export const MenuStack = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.ModalFadeTransition, headerShown: false}}>
            <Stack.Screen
                name={"MenuList"}
                component={MenuList}/>
            <Stack.Screen
                name={"AddMenu"}
                component={AddMenu}/>
            <Stack.Screen
                name={"EditMenu"}
                component={EditMenu}/>
        </Stack.Navigator>
    )
}