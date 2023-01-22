import {Alert, FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import useFetchQuery from "../../hooks/useFetchQuery";
import {deleteMenu, getMenus} from "../../service/menuApi";
import styles from "./styles";
import ButtonRounded from "../../components/Button/ButtonRounded";
import {ButtonAdd} from "../../components/Button/ButtonAdd";

import React from 'react';
import AnimatedLottieView from "lottie-react-native";
import useFetchMutation from "../../hooks/useFetchMutation";


const RendererMenu = (props) => {
    const {data, navigation, onDelete} = props

    const onUpdate = () => {
        navigation.navigate("EditMenu", {
            data: data
        })
    }

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.list}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{data?.item?.name}</Text>
                    <Text style={styles.desc}>Price : Rp. {data?.item?.price}</Text>
                </View>
                <View>
                    <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                        <ButtonRounded label={"create"} onPress={() => onUpdate()} disable={false}/>
                        <ButtonRounded label={"trash"} onPress={() => onDelete(data.item.id, data.item.name)}
                                       disable={false}/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const MenuList = (props) => {
    const [menus, setMenus] = useState([]);
    const {data, loading, error, refetch} = useFetchQuery(getMenus);
    const {fetchMutation: delMenus} = useFetchMutation(deleteMenu);


    useEffect(() => {
        if (props.route.params?.newMenu) {
            const newMenu = props.route.params?.newMenu;

            setMenus((prevState) => ([
                ...prevState,
                newMenu
            ]))
        }
        if (props.route.params?.updateMenu) {
            const updateMenu = props.route.params?.updateMenu;
            const index = menus.findIndex((menu) => menu.id === updateMenu.id);

            const copyMenu = menus;

            copyMenu[index] = updateMenu;

            setMenus(copyMenu)
        }
    }, [props.route.params])

    const onDelete = (id, name) => {

        Alert.alert('Delete Menu', 'Are u sure u want to delete ' + name + " ?", [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete', onPress: async () => {
                    await delMenus(id)
                    Alert.alert('Delete Menu', name + ' is Deleted', [
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
            setMenus(data?.data);
        }
    }, [data.data])

    const onAdd = () => {
        props.navigation.navigate("AddMenu");
    }

    return (

        <ImageBackground
            source={require("../../../assets/bg-menu.jpg")}
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
                    data={menus}
                    renderItem={(data) => <RendererMenu data={data} navigation={props.navigation}
                                                        onDelete={onDelete}/>}
                    keyExtractor={(data) => data.id}
                />
                <View style={{height: 80}}>

                </View>
                <View style={{right: 15, bottom: 100, position: "absolute"}}>
                    <ButtonAdd label={"add"} onPress={onAdd} disable={false}/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default MenuList;