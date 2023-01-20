import Ionicons from "@expo/vector-icons/Ionicons";

const Icon =({name, focused})=> {
    let iconName = !focused ? name + "-outline" : name;
    return (
        <Ionicons name={iconName} size={focused? 26:22}
                  color={focused ? "#FF5111" : "black"}/>
    )
}

export default Icon;