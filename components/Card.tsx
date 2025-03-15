import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
    unidade: string;
    peso: number;
    placa: string;
    udm: string;
};

const { width } = Dimensions.get("window");

const Card = ({ unidade, peso, placa, udm }: Props) => {
    return (
        <View style={styles.paper}>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{unidade}</Text>

                <Text style={styles.peso}>{peso} {udm}</Text>

                <Text style={styles.placa}>Placa: <Text style={{ fontWeight: 'bold' }}>{placa}</Text></Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.button} onPress={() => alert("Botão pressionado!")}>
                        <FontAwesome name="check" size={20} color="white" />
                        <Text style={styles.buttonText}>Aprovar</Text>
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
        alignItems: "center",
        width: width * 0.9, 
        maxWidth: 400,
        height: 'auto'
    },
    cardContent: {
        maxWidth: 1000,
        marginRight: 3,
        width: "96%",
        height: 400,
        flexDirection: "column",
        justifyContent: "space-between",
        shadowColor: "#bcbcbc",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 10,
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
        fontSize: 30,
        fontWeight: "400",
        marginVertical: 15,
    },
    placa: {
        fontSize: 18,
        paddingBottom: 15,
    },
    button: {
        backgroundColor: 'green',
        width: "100%",
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
        width: "100%",
        alignItems: "center",
        marginTop: 15,
    },
});
