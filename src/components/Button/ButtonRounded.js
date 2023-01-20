import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Icon from "../Icon";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonRounded = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonRound(props.label==="trash"? "red":"skyblue")} onPress={props.onPress} disabled={props.disable}>
                <Ionicons name={props.label} size={14}
                          color={"#FFFF"}/>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonRounded;