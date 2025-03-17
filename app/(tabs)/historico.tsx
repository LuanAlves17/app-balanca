import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "@/components/Header";
import CardHistory from "@/components/CardHistory";
import { DATA } from "@/data/db.test";

const PageHistory = () => {
    return (
        <View style={styles.container}>
            <Header />
            {DATA.length === 0 ? (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.notfound}>
                        <Image source={require('@/assets/images/404s.svg')} style={styles.notFoundImage} />
                        <Text style={styles.notFoundText}>Não existe dados referentes a essa unidade.</Text>
                    </View>
                </ScrollView>
            ) : (
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.cardWrapper}>
                            <CardHistory {...item} />
                        </View>
                    )}
                    contentContainerStyle={styles.listContainer}
                    showsHorizontalScrollIndicator={true}
                />
            )}
        </View>
    );
};

export default PageHistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ededed",
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    listContainer: {
        gap: 5,
        alignItems: "center",
    },
    cardWrapper: {
        width: Dimensions.get("screen").width * 0.9,
    },
    notfound: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    notFoundImage: {
        width: 400,
        height: 400,
        resizeMode: "contain",
    },
    notFoundText: {
        fontSize: 20,
        color: "#009b41",
        fontWeight: "500",
        textAlign: "center",
        marginTop: 10,
    },
});
