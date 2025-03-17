import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DATA } from "@/data/db.test";
import { DATAFILTERED } from "@/data/filterdb.test";
import { ObjectRequestDTO } from "@/data/modeldraft/arch/ObjectRequestDTO";


const { width } = Dimensions.get('window');



const Card = ({ peso, placa, udm, acceptedAt }: ObjectRequestDTO) => {
    async function handleSubmit(e: Event) {
        e.preventDefault();

        const DataFinded = DATA.find((data) => data.placa === placa)

        await DATAFILTERED.push(DataFinded);
    }

    return (
        <View style={styles?.paper}>
            <View style={styles?.cardContent}>
                <Text style={styles?.cardTitle}>{placa}</Text>

                <Text style={styles?.peso}>{peso} {udm}</Text>

                <Text style={styles?.placa}></Text>

                <View style={styles?.actions}>
                    <TouchableOpacity style={styles?.button} onPress={handleSubmit}>
                        <FontAwesome name="check" size={20} color="white" />
                        <Text style={styles?.buttonText}>Aprovar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    paper: {
        justifyContent: "center",
        maxWidth: 400,
        height: 'auto',
        padding: 10,
    },
    cardContent: {
        marginRight: 15,
        width: width * 0.50,
        height: 'auto',
        flexDirection: "column",
        justifyContent: "space-between",
        shadowColor: "#c9c9c9",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.67,
        shadowRadius: 2,
        borderRadius: 0,
        backgroundColor: "#fff",
        padding: 20,
    },
    cardTitle: {
        textAlign: "center",
        fontSize: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingBottom: 10,
    },
    peso: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "400",
        marginVertical: 15,
    },
    placa: {
        fontSize: 18,
        paddingBottom: 15,
    },
    button: {
        backgroundColor: 'rgb(10, 152, 57)',
        width: "90%",
        maxWidth: 400,
        paddingVertical: 12,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "500",
    },
    actions: {
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        alignContent: 'center',
        marginTop: 15,
    },
});
