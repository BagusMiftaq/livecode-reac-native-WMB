import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        marginHorizontal:10,
        marginVertical:10,
        paddingHorizontal: 10,
        paddingVertical:25,
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
        fontSize: 20,
        fontWeight: "bold",
        color: "#FF5111",
    },
    desc: {
        fontSize: 12,
        fontWeight:"bold",
    },
    list:{
        overflow:"hidden",
        marginHorizontal:10,
    }
})