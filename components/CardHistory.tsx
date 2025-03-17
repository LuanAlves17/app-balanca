import { Dimensions, StyleSheet, Text, View } from "react-native"

export type Props = {
    peso: number,
    placa: string,
    udm: string,
    actionRegistred: string,
    actionRegistredAt: Date,
}

const { width } = Dimensions.get("screen");

const CardHistory = ( { peso, placa, udm, actionRegistredAt, actionRegistred }  : Props) => {
    return (
        <View style={styles?.paper}>
            <View style={styles?.cardContent}>
                <Text style={styles?.peso}>{peso} {udm}</Text>

                <Text style={styles?.placa}>Placa: <Text style={{ fontWeight: 'bold' }}>{placa}</Text></Text>

                <Text style={styles?.acaoRegistrada}>{actionRegistred}: <Text style={{ fontWeight: 'bold' }}>{actionRegistredAt?.getHours()}</Text></Text>        
            </View>
        </View>
    )
}

export default CardHistory;

const styles = StyleSheet.create({
    paper: {
        justifyContent: "center",
        maxWidth: 400,
        height: 'auto',
        padding: 10,
    },
    cardContent: {
        marginRight: 15,
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
        fontWeight: "400",
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