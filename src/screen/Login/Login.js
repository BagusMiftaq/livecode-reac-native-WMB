import {Image, ImageBackground, KeyboardAvoidingView, Text, View} from "react-native";
import styles from "./styles";
import ButtonOk from "../../components/Button/ButtonOk";
import FormInput from "../../components/FormInput/FormInput";
import {useState} from "react";

const Login =(props)=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin=()=>{
        props.navigation.navigate("Main");
    }

    const fillRequierement =()=>{
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground
                source={require("../../../assets/bg-login.jpg")}
                style={{
                    flex: 1,
                    justifyContent: 'center',

                }}>
                <View
                    style={{backgroundColor: 'rgba(163, 46, 0,0.3)', justifyContent:"center", alignItems:"center", flex:1}}
                >
            <View style={styles.formContainer}>
                <Image style={styles.pic} source={require("../../../assets/wmb48.png")}/>
                <Text style={styles.title}>Login</Text>
                <FormInput
                    label={"Email"}
                    placeholder={"Enter your email . . ."}
                    value={email}
                    onChange={setEmail}
                    type={"email-address"}
                />
                <FormInput
                    label={"Password"}
                    placeholder={"Enter your password . . ."}
                    value={password}
                    onChange={setPassword}
                    secureTextEntry={true}
                />
                <ButtonOk label={"LOGIN"} onPress={onLogin} disable={false}/>
            </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default Login;