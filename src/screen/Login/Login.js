import {Image, ImageBackground, KeyboardAvoidingView, Text, View} from "react-native";
import styles from "./styles";
import ButtonOk from "../../components/Button/ButtonOk";
import FormInput from "../../components/FormInput/FormInput";
import {useState} from "react";
import {saveToken} from "../../utils/token";
import useFetchMutation from "../../hooks/useFetchMutation";
import {login} from "../../service/authApi";
import {validateEmail} from "../../utils/validate";
import {passwordLength} from "../../utils/passwordLength";
import AnimatedLottieView from "lottie-react-native";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        email: false,
        password:false
    });

    const onSuccess = async (token) => {
        if (token) {
            await saveToken(token);
            props.navigation.navigate("Main");
        } else {
            alert("Incorrect login username or\n" +
                "password")
        }
    }

    const {fetchMutation: loginMutation, loading} = useFetchMutation(
        login,
        onSuccess
    );

    const emailHandler = (value) => {

        setEmail(value);
        const isValid = (!validateEmail(value));
        setError((prevState) => ({
            ...prevState, email: isValid
        }));

    }

    const passwordHandler = (value) => {
        setPassword(value);
        const isValid = !(passwordLength(value))
        setError((prevState) => ({
            ...prevState, password: isValid
        }));
    }

    const onLogin = async () => {
        await loginMutation({email, password});
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground
                source={require("../../../assets/bg-login.jpg")}
                style={{
                    flex: 1,
                    justifyContent: 'center',

                }}>
                <View
                    style={{
                        backgroundColor: 'rgba(163, 46, 0,0.3)',
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1
                    }}
                >
                    {loading?<AnimatedLottieView source={require("../../../assets/loading-animate.json")} autoPlay loop/> :
                        <View style={styles.formContainer}>
                            <Image style={styles.pic} source={require("../../../assets/wmb48.png")}/>
                            <Text style={styles.title}>Login</Text>
                            <FormInput
                                label={"Email"}
                                placeholder={"Enter your email . . ."}
                                value={email}
                                onChange={emailHandler}
                                type={"email-address"}
                            />
                            {error?.email && <Text style={{marginLeft: 20, color: "red"}}>Invalid email format</Text>}
                            <FormInput
                                label={"Password"}
                                placeholder={"Enter your password . . ."}
                                value={password}
                                onChange={passwordHandler}
                                secureTextEntry={true}
                            />
                            {error?.password && <Text style={{marginLeft: 20, color: "red"}}>6 min length character</Text>}
                            <ButtonOk label={"LOGIN"} onPress={onLogin} disable={!(email && password ||loading)}/>
                        </View>
                    }
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default Login;