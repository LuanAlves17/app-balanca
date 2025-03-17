import Card from "@/components/Card";
import Header from "@/components/Header";
import { DATA } from "@/data/db.test";
import { FlatList, StyleSheet, View, Dimensions, Text } from "react-native";

const { width } = Dimensions.get("window");

const PageIndex = () => {
    return (
        <View>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Gerenciamento de Entradas e Saidas (Balança)</Text>

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
            </View>
        </View>
    );
};

export default PageIndex;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        paddingTop: 20,
        paddingBottom: 20,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        gap: 10
    },

    container: {
        flex: 1,
        height: 'auto',
        backgroundColor: "#ededed",
        justifyContent: 'center',
        gap: 10,
    },
    listContainer: {
        gap: 5,
        alignItems: "center",
    },
    cardWrapper: {
        width: Dimensions.get('screen').width * 0.9,
        justifyContent: 'center',
        
    },
});
