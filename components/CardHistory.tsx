import { ObjectRequestDTO } from "@/data/modeldraft/arch/ObjectRequestDTO";
import { Dimensions, StyleSheet, Text, View } from "react-native"

const { width } = Dimensions.get("window");

const CardHistory = ( { peso, placa, udm, acceptedAt }  : ObjectRequestDTO) => {
    return (
        <View style={styles?.paper}>
            <View style={styles?.cardContent}>
                <Text style={styles?.cardTitle}>{placa}</Text>

                <Text style={styles?.peso}>{peso} {udm}</Text>

                <Text style={styles?.acaoRegistrada}>Horário de aprovação: <Text style={{ fontWeight: 'bold' }}>{acceptedAt}</Text></Text>        
            </View>
        </View>
    )
}

export default CardHistory;

const styles = StyleSheet.create({
    paper: {
        alignItems: 'center',
        height: 'auto',
        marginTop: 15,
        marginBottom: 15
    },
    cardContent: {
        width: width * 0.90,
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
        fontWeight: 400,
        marginVertical: 15,
    },
    placa: {
        fontSize: 18,
        paddingBottom: 15,
    },
    acaoRegistrada: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 15,
    }
});