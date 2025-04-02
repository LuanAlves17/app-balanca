import { ObjectRequestDTO } from "@/data/modeldraft/arch/ObjectRequestDTO";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const COLOR_CANCELLED = '#ff392b';
const COLOR_ACCEPTED = '#38b31d';
const COLOR_NOT_LOADED = '#ccc';

const CardHistory = ({ peso, placa, udm, acceptedAt, accepted }: ObjectRequestDTO) => {
    const [color, setColor] = useState(COLOR_NOT_LOADED);
    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        setColor(accepted ? COLOR_ACCEPTED : COLOR_CANCELLED);

        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.2,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [accepted]);

    return (
        <View style={styles?.paper}>
            <View style={styles?.cardContent}>
                <Text style={{ background: color, width: 130, padding: 3, borderRadius: 50, color: 'white', fontSize: 17, textAlign: 'center' }}>{accepted ? "Aprovado" : "Desistência"}</Text>
                <Text style={styles?.cardTitle}>{placa}</Text>
                <Text style={styles?.peso}>{peso} {udm}</Text>

                <View style={styles?.eventLogs}>
                    <Text style={styles?.acaoRegistrada}>Horário de {accepted ? "aprovação" : "desistencia"}: <Text style={{ fontWeight: 'bold' }}>{acceptedAt}</Text></Text>        
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
        marginBottom: 15
    },
    eventLogs: {
        flexDirection:  'column',
        justifyContent: 'start',
        alignItems: 'start',
        paddingTop: 10,
        paddingBottom: 15,
        gap: 20,
    },
    status: {
        
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
