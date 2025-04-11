import { ObjectRequestDTO } from "@/data/modeldraft/arch/ObjectRequestDTO";
import { EmbarqueDTO, enumSituation } from "@/dto/EmbarqueDTO";
import { SplashScreen } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const { width } = Dimensions.get("window");

const COLOR_CANCELLED = '#ff392b';
const COLOR_ACCEPTED = '#38b31d';
const COLOR_NOT_LOADED = '#a8a8a8';
 
const CardHistory = ({ id, peso, placa, situacao, dataConfirmacao }: EmbarqueDTO) => {
    if(!situacao) return;

    const [color] = useState(situacao == enumSituation.CONFIRMADO ? COLOR_ACCEPTED : COLOR_CANCELLED);

    return (
        <View style={styles?.paper}>
            <View style={styles?.cardContent}>
                <Text style={{backgroundColor: color, width: 130, padding: 3, borderRadius: 50, color: 'white', fontSize: 17, textAlign: 'center'}}>{situacao}</Text>
                <Text style={styles?.cardTitle}>{placa}</Text>
                <Text style={styles?.peso}>{peso}</Text>

                <View style={styles?.eventLogs}>
                    <Text style={styles?.acaoRegistrada}>Horário de {situacao == enumSituation.CONFIRMADO ? 'Aprovação' : 'Desistencia'}: <Text style={{ fontWeight: 'bold' }}>{dataConfirmacao || 'N/a'}</Text></Text>        
                </View>

            </View>
        </View>
    );
};

export default CardHistory;

const styles = StyleSheet.create({
    paper: {
        alignItems: 'center',
        height: 'auto',
        marginTop: 15,
        marginBottom: 15,
        width: width
    },
    eventLogs: {
        flexDirection:  'column',
        justifyContent: 'start',
        alignItems: 'start',
        paddingTop: 10,
        paddingBottom: 15,
        gap: 20,
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
        fontWeight: "400",
        marginVertical: 15,
    },
    placa: {
        fontSize: 18,
        paddingBottom: 15,
    },
    acaoRegistrada: {
        fontSize: 18,
    }
});
