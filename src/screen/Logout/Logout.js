import {ImageBackground, Text, View} from "react-native";
import ButtonOk from "../../components/Button/ButtonOk";
import styles from "./styles";
import ButtonCancel from "../../components/Button/ButtonCancel";
import useFetchMutation from "../../hooks/useFetchMutation";
import {login, logout} from "../../service/authApi";
import {removeToken} from "../../utils/token";
import AnimatedLottieView from "lottie-react-native";

const Logout=(props)=>{

    const onSuccess = async () =>{
        await removeToken();
        props.navigation.navigate("Auth")
    }

    const {fetchMutation: logoutMutation, loading} = useFetchMutation(
        logout,
        onSuccess
    );

    const onLogout= async ()=>{
        await logoutMutation();
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
                {loading && <AnimatedLottieView source={require("../../../assets/loading-animate.json")} autoPlay loop/>}
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