import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import CustomerList from "../screen/Customer/CustomerList";
import AddCustomer from "../screen/AddCustomer/AddCustomer";
import EditCustomer from "../screen/EditCustomer/EditCustomer";

const Stack = createStackNavigator();
const CustomerStack=()=>{
    return(
        <Stack.Navigator screenOptions={{...TransitionPresets.ModalFadeTransition, headerShown: false}}>
            <Stack.Screen
                name={"CustomerList"}
                component={CustomerList}/>
            <Stack.Screen
                name={"AddCustomer"}
                component={AddCustomer}/>
            <Stack.Screen
                name={"EditCustomer"}
                component={EditCustomer}/>
        </Stack.Navigator>
    )
}

export default CustomerStack;