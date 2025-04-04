import { TouchableOpacity, Text, StyleSheet, View, Dimensions, Modal, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ObjectRequestDTO } from "@/data/modeldraft/arch/ObjectRequestDTO";
import { useContext, useState } from "react";
import { EmbarqueContext } from "@/contexts/embarqueContext";

const { width } = Dimensions.get('window');

const Card = ({ id, peso, placa, udm, accepted, acceptedAt }: ObjectRequestDTO) => {
    const [data, setData] = useState({ id, peso, placa, udm, accepted, acceptedAt });
    const { acceptOn, cancelOn } = useContext(EmbarqueContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [cancelModal, setCancelModal] = useState(false);

    const deboundDate: Date = new Date();
    
    async function handleConfirm() { 
        setModalVisible(false);
        await acceptOn(data);
    }
    async function handleConfirmCancel() {
        setModalVisible(false);
        await cancelOn(data);
    }

    

    return (
        <View style={styles.paper}>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{placa}</Text>
                <Text style={styles.peso}>{peso} {udm}</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.buttonConfirm} onPress={() => setModalVisible(true)}>
                        <FontAwesome name="check" size={20} color="white" />
                        <Text style={styles.buttonText}>Aprovar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonCancel} onPress={() => setCancelModal(true)}>
                        <FontAwesome name="ban" size={20} color="white" />
                        <Text style={styles.buttonText}>Desistir</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Tem certeza que deseja aprovar?</Text>

                        <View style={styles.auditoria}>
                            <Text style={styles.auditoriaTexto}>Placa: {placa}</Text>
                            <Text style={styles.auditoriaTexto}>Peso: {peso} {udm}</Text>
                            <Text style={styles.auditoriaTexto}>Horário de Aprovação: {`${deboundDate.getHours()}:${deboundDate.getMinutes()}`}</Text>
                        </View>

                        <Text style={styles.modalTextCancel}>Essa ação não pode ser desfeita.</Text>
                        
                        <View style={styles.modalActions}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleConfirm}>
                                <Text style={styles.modalButtonText}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={cancelModal}
                onRequestClose={() =>  setCancelModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Tem certeza que deseja Cancelar?</Text>

                        <Text style={styles.modalTextCancel}>Essa ação não pode ser desfeita</Text>

                        <View style={styles.modalActions}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleConfirmCancel}>
                                <Text style={styles.modalButtonText}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setCancelModal(false)}>
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardTitle: {
        textAlign: "center",
        fontSize: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#dadada",
        paddingBottom: 10,
    },

    paper: {
        justifyContent: "center",
        height: "auto",
        alignItems: "center", 
        alignContent: 'center',
    },
    cardContent: {
        width: width * 0.9,
        height: 300,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: "#ffffff",
        padding: 20,
        zIndex: 1,
    },

    auditoria: {
        paddingBottom: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    auditoriaTexto: {
        fontSize: 20,
        fontWeight: '500',
    },

    peso: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "400",
        marginVertical: 15,
    },
    buttonConfirm: {
        backgroundColor: 'rgb(10, 152, 57)',
        width: "90%",
        maxWidth: 200,
        paddingVertical: 12,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
    },
    buttonCancel: {
        backgroundColor: 'rgb(218, 39, 39)',
        width: "90%",
        maxWidth: 200,
        paddingVertical: 12,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
    },
    labelReason: {
        width: '100%'
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "500",
    },
    actions: {
        
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center",
        alignContent: 'center',
        marginTop: 15,
        gap: 15,
        flexWrap: true,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.264)', 
    },
    modalContent: {
        boxShadow: '0px 0px 3px #c9c9c9',
        width: 500,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center'
    },
    modalTextCancel: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center'
    },
    modalActions: {
        flexDirection: 'row',
        gap: 10,
    },
    modalButton: {
        backgroundColor: 'rgb(10, 152, 57)',
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#da3232',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});