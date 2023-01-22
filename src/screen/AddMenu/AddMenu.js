import {KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import styles from "./styles";
import React, {useState} from "react";
import ButtonOk from "../../components/Button/ButtonOk";
import ButtonCancel from "../../components/Button/ButtonCancel";
import FormInput from "../../components/FormInput/FormInput";
import useFetchMutation from "../../hooks/useFetchMutation";
import {addMenu} from "../../service/menuApi";
import AnimatedLottieView from "lottie-react-native";

const AddMenu = (props) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [disable, isDisable] = useState(true);
    const {fetchMutation, loading, error} = useFetchMutation(addMenu)

    const submitHandler = async () => {
        const payload = {
            id: id,
            name: name,
            price: price
        };

        await fetchMutation(payload);
        if (!error) {
            props.navigation.navigate("MenuList", {
                newMenu: payload
            })
        }
    }

    const onCancel = () => {
        props.navigation.navigate("MenuList");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            {loading ? (<AnimatedLottieView source={require("../../../assets/loading-animate.json")} autoPlay loop/>)
                :
                <View>
                    <Text style={styles.title}>Add Menu</Text>
                    <ScrollView style={styles.formContainer}>
                        <FormInput
                            label={"Id"}
                            placeholder={"Enter new Id . . ."}
                            value={id}
                            onChange={setId}
                            type={"default"}
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
                            value={price}
                            onChange={setPrice}
                            type={"number-pad"}
                        />
                    </ScrollView>
                    <ButtonOk label={"Submit"} onPress={submitHandler} disable={!(id && name && price) || loading}/>
                    <ButtonCancel label={"Cancel"} onPress={onCancel}/>
                </View>
            }

        </KeyboardAvoidingView>
    )
}

export default AddMenu;