import {TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ButtonAdd =(props)=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonAdd("#FF5111")} onPress={props.onPress} disabled={props.disable} activeOpacity={1}>
                <Ionicons name={props.label} size={50}
                          color={"#FFFF"}/>
            </TouchableOpacity>
        </View>
    )
}