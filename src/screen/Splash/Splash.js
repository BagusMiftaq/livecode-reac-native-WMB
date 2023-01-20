import {Image, Text, View} from "react-native";
import styles from "./styles";
import {useEffect} from "react";

const Splash=(props)=>{

    const onNavigate= ()=>{
        props.navigation.navigate("Auth");
    }

    useEffect(()=>{
        setTimeout(()=>{
            onNavigate();
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