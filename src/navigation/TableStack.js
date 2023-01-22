import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import TableList from "../screen/TableList/TableList";
import AddTable from "../screen/AddTable/AddTable";
import EditTable from "../screen/EditTable/EditTable";

const Stack = createStackNavigator();
const TableStack=()=>{
    return(
        <Stack.Navigator screenOptions={{...TransitionPresets.ModalFadeTransition, headerShown: false}}>
            <Stack.Screen
                name={"TableList"}
                component={TableList}/>
            <Stack.Screen
                name={"AddTable"}
                component={AddTable}/>
            <Stack.Screen
                name={"EditTable"}
                component={EditTable}/>
        </Stack.Navigator>
    )
}

export default TableStack;