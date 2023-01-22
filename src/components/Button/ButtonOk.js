import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

const ButtonOk=(props)=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonOk(props.disable? "#ff7c49":"#FF5111")} onPress={props.onPress} disabled={props.disable}>
                <Text style={styles.text}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonOk;