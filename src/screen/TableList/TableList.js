import {Alert, FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import useFetchQuery from "../../hooks/useFetchQuery";
import React, {useEffect, useState} from "react";
import {deleteTable, getTable, updateTable} from "../../service/tableApi";
import styles from "./styles";
import ButtonRounded from "../../components/Button/ButtonRounded";
import {ButtonAdd} from "../../components/Button/ButtonAdd";
import AnimatedLottieView from "lottie-react-native";
import useFetchMutation from "../../hooks/useFetchMutation";


const RendererTable = (props) => {
    const {data, navigation, onDelete} = props;
    const onUpdate = () => {
        navigation.navigate("EditTable", {
            data: data
        })
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.list}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Table : {data?.item?.nomor}</Text>
                    <Text
                        style={styles.desc(data.item.status === "Available" ? "green" : "red")}>{data?.item?.status}</Text>
                </View>
                <View>
                    <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                        <ButtonRounded label={"create"} onPress={() => onUpdate()} disable={false}/>
                        <ButtonRounded label={"trash"} onPress={() => onDelete(data.item.id, data.item.nomor)}
                                       disable={false}/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const TableList = (props) => {
    const [tables, setTables] = useState([]);
    const {data, loading, refetch} = useFetchQuery(getTable);
    const {fetchMutation: delTable} = useFetchMutation(deleteTable)

    useEffect(() => {
        if (props.route.params?.newTable) {
            const newTable = props.route.params?.newTable;

            setTables((prevState) => ([
                ...prevState,
                newTable
            ]))
        }
        if (props.route.params?.updateTable) {
            const updateTable = props.route.params?.updateTable;
            const index = tables.findIndex((table) => table.id === updateTable.id);

            const copyTable = tables;

            copyTable[index] = updateTable;

            setTables(copyTable)
        }
    }, [props.route.params])

    const onDelete = (id, nomor) => {
        Alert.alert('Delete Table', 'Are u sure u want to delete table ' + nomor+ " ?", [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete', onPress: async () => {
                    await delTable(id)
                    Alert.alert('Delete Table', nomor + ' is Deleted', [
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
            setTables(data?.data);
        }
    }, [data.data])

    const onAdd = () => {
        props.navigation.navigate("AddTable");
    }

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
                {loading &&
                    <AnimatedLottieView source={require("../../../assets/loading-animate.json")} autoPlay loop/>}
                <FlatList
                    style={{marginTop: 40}}
                    data={tables}
                    renderItem={(data) => <RendererTable
                        data={data}
                        navigation={props.navigation}
                        onDelete={onDelete}/>}
                    keyExtractor={(data) => data.id}
                />
                <View style={{height: 75}}>

                </View>
                <View style={{right: 15, bottom: 100, position: "absolute"}}>
                    <ButtonAdd label={"add"} onPress={onAdd} disable={false}/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default TableList;