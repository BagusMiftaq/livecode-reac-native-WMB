import styles from "./styles";
import {Text, TouchableOpacity, View} from "react-native";

const ButtonCancel =(props)=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonCancel} onPress={props.onPress} disabled={props.disable}>
                <Text style={styles.text}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )

}

export default ButtonCancel;