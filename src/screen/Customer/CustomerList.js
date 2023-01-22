import {Alert, Button, FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import useFetchQuery from "../../hooks/useFetchQuery";
import {deleteCustomer, getCustomer} from "../../service/customerApi";
import styles from "./styles";
import ButtonRounded from "../../components/Button/ButtonRounded";
import {ButtonAdd} from "../../components/Button/ButtonAdd";
import AnimatedLottieView from "lottie-react-native";
import useFetchMutation from "../../hooks/useFetchMutation";


const RendererCustomer = (props) => {
    const {data, navigation, onDelete} = props

    const onUpdate = () => {
        navigation.navigate("EditCustomer", {
            data: data
        })
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.list}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{data.item.nama}</Text>
                    <Text style={styles.desc}>Email      :   {data.item.email}</Text>
                    <Text style={styles.desc}>Address :   {data.item.alamat}</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                    <ButtonRounded label={"create"} onPress={()=>onUpdate()} disable={false}/>
                    <ButtonRounded label={"trash"} onPress={()=>onDelete(data.item.id, data.item.nama)} disable={false}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const CustomerList=(props)=>{
    const [customers, setCustomers] = useState([]);
    const {data, loading, refetch} = useFetchQuery(getCustomer);
    const {fetchMutation: delCustomer} = useFetchMutation(deleteCustomer)

    useEffect(() => {
        if (props.route.params?.newCustomer) {
            const newCustomer = props.route.params?.newCustomer;

            setCustomers((prevState) => ([
                ...prevState,
                newCustomer
            ]))
        }
        if (props.route.params?.updateCustomer) {
            const updateCustomer = props.route.params?.updateCustomer;
            const index = customers.findIndex((customer) => customer.id === updateCustomer.id);

            const copyCustomer = customers;

            copyCustomer[index] = updateCustomer;

            setCustomers(copyCustomer)
        }
    }, [props.route.params])

    const onDelete = (id, name) => {

        Alert.alert('Delete Customer', 'Are u sure u want to delete ' + name + " ?", [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete', onPress: async () => {
                    await delCustomer(id)
                    Alert.alert('Delete Customer', name + ' is Deleted', [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ]);
                }
            },
        ]);

    }

    useEffect(() => {
        if (data.data === undefined) {
            refetch();
        } else {
            setCustomers(data?.data);
        }
    }, [data.data])

    const onAdd = () => {
        props.navigation.navigate("AddCustomer");
    }

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
                {loading && <AnimatedLottieView source={require("../../../assets/loading-animate.json")} autoPlay loop/>}
                <FlatList
                    style={{marginTop: 40}}
                    data={customers}
                    renderItem={(data)=><RendererCustomer data={data} navigation={props.navigation}
                                                      onDelete={onDelete}/>}
                    keyExtractor={(data) => data.id}
                />
                <View style={{height:75}}>

                </View>
                <View style={{right:15, bottom:100,position:"absolute"}}>
                    <ButtonAdd label={"add"} onPress={onAdd} disable={false}/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default CustomerList;