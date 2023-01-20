import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MenuList from "../screen/MenuList/MenuList";
import TableList from "../screen/TableList/TableList";
import CustomerList from "../screen/Customer/CustomerList";
import Icon from "../components/Icon";
import Logout from "../screen/Logout/Logout";

const Tab = createBottomTabNavigator();

const FORM_LIST = [
    {name: "MenuList", component:MenuList, icon:"fast-food"},
    {name: "TableList", component:TableList, icon:"file-tray"},
    {name: "CustomerList", component: CustomerList, icon:"people-circle"},
    {name: "Logout", component:Logout, icon:"log-out"},
]

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabel: () => null,
            headerShown: false,
            tabBarStyle: {
                position : "absolute",
                backgroundColor: 'white',
                borderRadius:50,
                margin:20,
                height: 60,
                shadowColor: '#000',
                shadowOffset: {width: 20, height: 20},
                shadowOpacity:1,
                shadowRadius: 10,
                elevation: 10,
            },
        }}>
            {FORM_LIST.map((item)=>(
                <Tab.Screen name={item.name}
                            component={item.component}
                            options={{
                                tabBarIconStyle: {
                                    marginTop: 5
                                },
                                tabBarIcon: ({focused}) => <Icon name={item.icon} focused={focused}></Icon>
                            }}/>
            ))}
        </Tab.Navigator>
    )
}

export default BottomTab;