import {Image, Text, View} from "react-native";
import styles from "./styles";
import {useEffect} from "react";
import {getToken} from "../../utils/token";

const Splash=(props)=>{

    const onNavigate= async ()=>{
        const token = await getToken();
        if (token){
            props.navigation.navigate("Main")
        } else {
            props.navigation.navigate("Auth")
        }
    }

    useEffect( ()=>{
        setTimeout(async ()=>{
            await onNavigate();
        }, 3000)
    }, [])

    return(
        <View style={styles.container}>
            <Image source={require("../../../assets/wmb96.png")}/>
            <Text style={styles.title}>Warung . Makan . Bahari</Text>
        </View>
    )
}

export default Splash;