import {Button, FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import useFetchQuery from "../../hooks/useFetchQuery";
import {getCustomer} from "../../service/customerApi";
import styles from "./styles";
import ButtonRounded from "../../components/Button/ButtonRounded";


const RendererCustomer = (data) => {

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.list}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{data.item.nama}</Text>
                    <Text style={styles.desc}>Email      :   {data.item.email}</Text>
                    <Text style={styles.desc}>Address :   {data.item.alamat}</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                    <ButtonRounded label={"create"} onPress={()=>{}} disable={false}/>
                    <ButtonRounded label={"trash"} onPress={()=>{}} disable={false}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const CustomerList=()=>{
    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {data, loading} = useFetchQuery(getCustomer);

    const onChangeData = () => {
        const newCustomers = data?.data || [];

        setCustomers(newCustomers);
    }

    const onChangeCurrentPage = () => {
        if (currentPage !== data?.data.length) {
            setCurrentPage((prevState) => prevState + 1);
        }
    }

    useEffect(()=>{
        if (customers!==data.data){
            onChangeData()
        }
    },[data.data])

    return (

        <ImageBackground
            source={require("../../../assets/bg-cust.jpg")}
            style={{
                flex: 1,
                justifyContent: 'center',
            }}>
            <View
                style={{backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}}
            >
                <FlatList
                    style={{marginTop: 40}}
                    data={customers}
                    renderItem={RendererCustomer}
                    keyExtractor={(data) => data.id}
                    onEndReached={onChangeCurrentPage}
                    refreshing={loading}
                />
            </View>
        </ImageBackground>
    )
}

export default CustomerList;