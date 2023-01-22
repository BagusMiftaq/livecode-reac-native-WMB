import {KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import styles from "../AddTable/styles";
import React, {useState} from "react";
import ButtonOk from "../../components/Button/ButtonOk";
import ButtonCancel from "../../components/Button/ButtonCancel";
import FormInput from "../../components/FormInput/FormInput";
import useFetchMutation from "../../hooks/useFetchMutation";
import AnimatedLottieView from "lottie-react-native";
import {updateTable} from "../../service/tableApi";

const EditTable = (props) => {
    const {route:{params:{data:{item}}}} = props;
    const [id, setId] = useState(item.id);
    const [nomor, setNomor] = useState(item.nomor);
    const [status, setStatus] = useState(item.status)
    const {fetchMutation: updateMutation, loading, error} = useFetchMutation(updateTable)

    const submitHandler = async () => {
        const payload = {
            id: id,
            nomor : nomor,
            status : status
        };

        await updateMutation(payload);
        if (!error) {
            props.navigation.navigate("TableList", {
                updateTable: payload
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
                    <Text style={styles.title}>Edit Table</Text>
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
                            label={"Nomor"}
                            placeholder={"Enter Table Number . . ."}
                            value={nomor.toString()}
                            onChange={setNomor}
                            type={"number-pad"}
                        />
                        <FormInput
                            label={"Status"}
                            placeholder={"Enter Table Status . . ."}
                            value={status}
                            onChange={setStatus}
                            type={"default"}
                        />
                    </ScrollView>
                    <ButtonOk label={"Submit"} onPress={submitHandler} disable={!(id && nomor) || loading}/>
                    <ButtonCancel label={"Cancel"} onPress={onCancel}/>
                </View>
            }

        </KeyboardAvoidingView>
    )
}

export default EditTable;