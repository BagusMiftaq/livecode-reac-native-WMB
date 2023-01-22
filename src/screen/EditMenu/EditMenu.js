import {KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import styles from "../AddMenu/styles";
import FormInput from "../../components/FormInput/FormInput";
import ButtonOk from "../../components/Button/ButtonOk";
import ButtonCancel from "../../components/Button/ButtonCancel";
import useFetchMutation from "../../hooks/useFetchMutation";
import {updateMenu} from "../../service/menuApi";
import React, {useEffect, useState} from "react";
import AnimatedLottieView from "lottie-react-native";

const EditMenu = (props) =>{
    const {route:{params:{data:{item}}}} = props;
    const [id, setId] = useState(item.id);
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const {fetchMutation: updateMutation, loading, error} = useFetchMutation(updateMenu, ()=>props.navigation.navigate("MenuList"))

    // console.log("edit",props)
    const submitHandler = async () => {
        const payload = {
            id: id,
            name: name,
            price: price
        };

        await updateMutation(payload);
        console.log("update payload", payload);
        if (!error) {
            props.navigation.navigate("MenuList", {
                updateMenu: payload
            })
        }
    }

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            {loading? (<AnimatedLottieView source={require("../../../assets/loading-animate.json")} autoPlay loop/>)
                :
                <View>
                    <Text style={styles.title}>Edit Menu</Text>
                    <ScrollView style={styles.formContainer}>
                        <FormInput
                            label={"Id"}
                            placeholder={"Enter new Id . . ."}
                            value={id}
                            onChange={setId}
                            type={"default"}
                            disable={true}
                        />
                        <FormInput
                            label={"Menu"}
                            placeholder={"Enter Menu Name . . ."}
                            value={name}
                            onChange={setName}
                            type={"default"}
                        />
                        <FormInput
                            label={"Price"}
                            placeholder={"Enter Price . . ."}
                            value={price.toString()}
                            onChange={setPrice}
                            type={"number-pad"}
                        />
                    </ScrollView>
                    <ButtonOk label={"Submit"} onPress={submitHandler} disable={false}/>
                    <ButtonCancel label={"Cancel"} onPress={()=>{props.navigation.navigate("MenuList")}}/>
                </View>
            }

        </KeyboardAvoidingView>
    )
}

export default EditMenu;