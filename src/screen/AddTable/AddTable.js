import {KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import styles from "./styles";
import React, {useState} from "react";
import ButtonOk from "../../components/Button/ButtonOk";
import ButtonCancel from "../../components/Button/ButtonCancel";
import FormInput from "../../components/FormInput/FormInput";
import useFetchMutation from "../../hooks/useFetchMutation";
import {addMenu} from "../../service/menuApi";
import AnimatedLottieView from "lottie-react-native";
import {addTable} from "../../service/tableApi";

const AddTable = (props) => {
    const [id, setId] = useState("");
    const [nomor, setNomor] = useState("");
    const [disable, isDisable] = useState(true);
    const {fetchMutation, loading, error} = useFetchMutation(addTable)

    const submitHandler = async () => {
        const payload = {
            id: id,
            nomor : nomor,
            status : "Available"
        };

        await fetchMutation(payload);
        if (!error) {
            props.navigation.navigate("TableList", {
                newTable: payload
            })
        }
    }

    const onCancel = () => {
        props.navigation.navigate("TableList");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            {loading ? (<AnimatedLottieView source={require("../../../assets/loading-animate.json")} autoPlay loop/>)
                :
                <View>
                    <Text style={styles.title}>Add Table</Text>
                    <ScrollView style={styles.formContainer}>
                        <FormInput
                            label={"Id"}
                            placeholder={"Enter new Id . . ."}
                            value={id}
                            onChange={setId}
                            type={"default"}
                        />
                        <FormInput
                            label={"Nomor"}
                            placeholder={"Enter Table Number . . ."}
                            value={nomor}
                            onChange={setNomor}
                            type={"number-pad"}
                        />
                    </ScrollView>
                    <ButtonOk label={"Submit"} onPress={submitHandler} disable={!(id && nomor) || loading}/>
                    <ButtonCancel label={"Cancel"} onPress={onCancel}/>
                </View>
            }

        </KeyboardAvoidingView>
    )
}

export default AddTable;