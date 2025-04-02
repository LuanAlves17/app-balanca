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
                onRequestClose={() => setCancelModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Tem certeza que deseja Cancelar?</Text>

                        <Text style={styles.modalTextCancel}>Essa ação não pode ser desfeita</Text>
                        
                        {/* <View style={styles.reasonCancel}>
                            <Text style={styles.labelReason}>Digite um motivo</Text>
                            <TextInput
                                style={styles.inputReason}
                                onChange={(e) => {
                                    if(e.target.value.length == 0 || e.target.value == '' || e.target.value == undefined) {
                                        setEnabled(true);
                                    }
                                    else {
                                        setEnabled(false);
                                    }
                                }}
                            />
                        </View> */}


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
    paper: {
        justifyContent: "center",
        
        height: 'auto',
        padding: 10,
    },
    cardContent: {
        marginRight: 15,
        width: width * 0.89,
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
    buttonConfirm: {
        backgroundColor: 'rgb(10, 152, 57)',
        width: "90%",
        maxWidth: 200,
        paddingVertical: 12,
        borderRadius: 50,
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
        borderRadius: 50,
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
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center",
        alignContent: 'center',
        marginTop: 15,
        gap: 15,
        flexWrap: true,
    },
    // inputReason: {
    //     height:40,
    //     marginTop: 20,
    //     outline: 0,
    //     border: '1px solid #ccc',
    // },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        boxShadow: '0px 0px 3px #c9c9c9',
        width: 500,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    // reasonCancel: {
    //     width: 439,
    //     padding: 10
    // },
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