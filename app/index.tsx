import Card from "@/components/Card";
import Header from "@/components/Header";
import { FlatList, StyleSheet, View, Dimensions, Text } from "react-native";

const { width } = Dimensions.get("window");

const PageIndex = () => {
    const DATA = [
        { id: "1", unidade: "Unidade 02", peso: 45.34, placa: "ATP-2241", udm: "TON" },
        { id: "2", unidade: "Unidade 03", peso: 50.12, placa: "BRF-9987", udm: "TON" },
        { id: "3", unidade: "Unidade 04", peso: 38.76, placa: "CDE-4563", udm: "TON" },
        { id: "4", unidade: "Unidade 05", peso: 60.89, placa: "EFG-7896", udm: "TON" },
    ];

    return (
        <View style={styles.container}>
            <Header />

            <FlatList
                horizontal
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardWrapper}>
                        <Card {...item} />
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
                snapToAlignment="center"
                pagingEnabled
                showsHorizontalScrollIndicator={false}

            />

            <View></View>
        </View>
    );
};

export default PageIndex;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ededed",
        justifyContent: 'center',
        gap: 10
    },
    listContainer: {
        gap: 5,
        margin: '0 auto',
        paddingTop: 100,
        paddingBottom: 100,
        alignItems: "center",
    },
    cardWrapper: {
        justifyContent: 'center'
    },
});
