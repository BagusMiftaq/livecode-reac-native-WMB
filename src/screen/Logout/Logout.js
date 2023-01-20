import {ImageBackground, Text, View} from "react-native";
import ButtonOk from "../../components/Button/ButtonOk";
import styles from "./styles";
import ButtonCancel from "../../components/Button/ButtonCancel";

const Logout=(props)=>{

    const onLogout=()=>{
        props.navigation.navigate("Login")
    }

    return(
        <ImageBackground
            source={require("../../../assets/bg-logout.jpg")}
            style={{
                flex: 1,
                justifyContent: 'center',
            }}>
            <View
                style={{backgroundColor: 'rgba(0, 0, 0,0.5)', flex: 1}}
            >
                <View style={styles.container}>
                    <ButtonCancel
                        label={"LOGOUT"} onPress={onLogout}
                    />
                </View>
        </View>
        </ImageBackground>
    )
}

export default Logout;