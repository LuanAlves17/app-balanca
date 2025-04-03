import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "@/components/Header";
import CardHistory from "@/components/CardHistory";
import { DATA } from "@/data/db.test";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { EmbarqueContext } from "@/contexts/embarqueContext";
import { ObjectRequestDTO } from "@/data/modeldraft/arch/ObjectRequestDTO";

const PageHistory = () => {
    const { data } = useContext(EmbarqueContext);

    const dataAccept = data.filter((dataSingle: ObjectRequestDTO) => dataSingle.gotoHistory);

    return (
        <View style={styles.container}>
            <Header />
            { dataAccept.length === 0 ? (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.notfound}>
                        <Image source={require('@/assets/images/404s.png')} style={styles.notFoundImage} />
                        <Text style={styles.notFoundText}>Não existe dados referentes a essa unidade. </Text>
                    </View>
                </ScrollView>
            ) : (
                <SafeAreaProvider>
                    <SafeAreaView style={styles.container} edges={['top']}>
                        <FlatList
                            data={dataAccept.reverse()}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => (
                                <CardHistory {...item} />
                            )}
                        />
                    </SafeAreaView>
                </SafeAreaProvider>
            )}
        </View>
    );
};

export default PageHistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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