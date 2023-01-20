import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

const ButtonOk=(props)=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonOk} onPress={props.onPress} disabled={props.disable}>
                <Text style={styles.text}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonOk;