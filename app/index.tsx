import Card from "@/components/Card"
import Header from "@/components/Header"
import { StyleSheet, Text, View } from "react-native"

const PageIndex = () => {
    return (
        <View>
            <Header/>
            <View style={styles.cards}>
                <Card unidade="Unidade 02" peso={45.34} placa="ATP-2241" udm="TON"/>
            </View>
        </View>
    )
}

export default PageIndex;

const styles = StyleSheet.create({
    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    }
});