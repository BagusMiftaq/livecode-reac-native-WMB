import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#FF5111",
    },
    formContainer:{
        margin:10,
        width: 300,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    title:{
        color:"#FF5111",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginTop:20
    },
    pic:{
        marginLeft: 90,
        height:80,
        width:80

    }
})