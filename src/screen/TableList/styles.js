import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        marginHorizontal:10,
        marginVertical:10,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    button: {
        width: 100,
        borderRadius: 10,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        height: 50
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#FF5111",
    },
    desc: (status)=>({
        fontSize: 16,
        fontWeight:"bold",
        color: status
    }),
    list:{
        overflow:"hidden",
        marginHorizontal:10,
    }
})