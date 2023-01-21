import {FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import useFetchQuery from "../../hooks/useFetchQuery";
import React, {useEffect, useState} from "react";
import {getTable} from "../../service/tableApi";
import styles from "./styles";
import ButtonRounded from "../../components/Button/ButtonRounded";
import {ButtonAdd} from "../../components/Button/ButtonAdd";
import AnimatedLottieView from "lottie-react-native";


const RendererTable = (data) => {

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.list}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Table : {data.item.nomor}</Text>
                    <Text style={styles.desc(data.item.status==="Available"? "green":"red")}>{data.item.status}</Text>
                </View>
                <View>
                    <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                        <ButtonRounded label={"create"} onPress={()=>{}} disable={false}/>
                        <ButtonRounded label={"trash"} onPress={()=>{}} disable={false}/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const TableList=()=>{
    const [tables, setTables] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {data, loading} = useFetchQuery(getTable);

    const onChangeData = () => {
        const newTables = data?.data || [];

        setTables(newTables);
    }

    const onChangeCurrentPage = () => {
        if (currentPage !== data?.data.length) {
            setCurrentPage((prevState) => prevState + 1);
        }
    }

    useEffect(()=>{
        if (tables!==data.data){
            onChangeData()
        }
    },[data.data])

    return (

        <ImageBackground
            source={require("../../../assets/bg-table.jpg")}
            style={{
                flex: 1,
                justifyContent: 'center',
            }}>
            <View
                style={{backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}}
            >
                {loading && <AnimatedLottieView source={require("../../../assets/loading-animate.json")} autoPlay loop/>}
                <FlatList
                    style={{marginTop: 40}}
                    data={tables}
                    renderItem={RendererTable}
                    keyExtractor={(data) => data.id}
                    onEndReached={onChangeCurrentPage}
                    refreshing={loading}
                />
                <View style={{height:75}}>

                </View>
                <View style={{right:15, bottom:100,position:"absolute"}}>
                    <ButtonAdd label={"add"} onPress={()=>{}} disable={false}/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default TableList;