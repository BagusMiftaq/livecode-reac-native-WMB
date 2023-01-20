import {FlatList, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import useFetchQuery from "../../hooks/useFetchQuery";
import {getMenus} from "../../service/menuApi";
import styles from "./styles";
import ButtonRounded from "../../components/Button/ButtonRounded";


const RendererMenu = (data) => {

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.list}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{data.item.name}</Text>
                    <Text style={styles.desc}>Price : Rp. {data.item.price}</Text>
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

const MenuList = () => {
    const [menus, setMenus] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {data, loading} = useFetchQuery(getMenus);

    const onChangeData = () => {
        const newMenus = data?.data || [];

        setMenus(newMenus)
    }

    useEffect(()=>{
        if (menus!==data.data){
            onChangeData()
        }
    },[data.data])

    // console.log("menus", menus);

    const onChangeCurrentPage = () => {
        if (currentPage !== data?.data.length) {
            setCurrentPage((prevState) => prevState + 1);
        }
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
                <FlatList
                    style={{marginTop: 40}}
                    data={menus}
                    renderItem={RendererMenu}
                    keyExtractor={(data) => data.id}
                    onEndReached={onChangeCurrentPage}
                    refreshing={loading}
                />
            </View>
        </ImageBackground>
    )
}

export default MenuList;