import {KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import styles from "../AddTable/styles";
import React, {useState} from "react";
import ButtonOk from "../../components/Button/ButtonOk";
import ButtonCancel from "../../components/Button/ButtonCancel";
import FormInput from "../../components/FormInput/FormInput";
import useFetchMutation from "../../hooks/useFetchMutation";
import AnimatedLottieView from "lottie-react-native";
import {updateTable} from "../../service/tableApi";
import {updateCustomer} from "../../service/customerApi";

const EditCustomer = (props) => {
    const {route: {params: {data: {item}}}} = props;
    const [id, setId] = useState(item.id);
    const [nama, setNama] = useState(item.nama);
    const [email, setEmail] = useState(item.email);
    const [alamat, setAlamat] = useState(item.alamat);
    const {fetchMutation: updateMutation, loading, error} = useFetchMutation(updateCustomer)

    const submitHandler = async () => {
        const payload = {
            id: id,
            nama: nama,
            email: email,
            alamat: alamat
        };

        await updateMutation(payload);
        if (!error) {
            props.navigation.navigate("CustomerList", {
                updateCustomer: payload
            })
        }
    }

    const onCancel = () => {
        props.navigation.navigate("CustomerList");
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
                            label={"Name"}
                            placeholder={"Enter Name . . ."}
                            value={nama}
                            onChange={setNama}
                            type={"default"}
                        />
                        <FormInput
                            label={"Email"}
                            placeholder={"Enter email . . ."}
                            value={email}
                            onChange={setEmail}
                            type={"default"}
                        />
                        <FormInput
                            label={"Address"}
                            placeholder={"Enter Address . . ."}
                            value={alamat}
                            onChange={setAlamat}
                            type={"default"} />
                    </ScrollView>
                    <ButtonOk label={"Submit"} onPress={submitHandler} disable={!(id && nama && email && alamat) || loading}/>
                    <ButtonCancel label={"Cancel"} onPress={onCancel}/>
                </View>
            }

        </KeyboardAvoidingView>
    )
}

export default EditCustomer;