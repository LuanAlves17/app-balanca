import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import Header from "@/components/Header";
import { DATAFILTERED } from "@/data/filterdb.test";
import CardHistory from "@/components/CardHistory";

const PageHistory = () => {
    return (
        <View>
            <Header />

                { DATAFILTERED.length == 0 ? (
                    <View style={styles.notfound}>
                        <Image source={require('@/assets/images/404s.svg')}/>
                        <Text style={styles.notFoundText}>Não existe Dados Aprovados referentes a essa unidade</Text>
                    </View>
                ) :
                (
                    <FlatList 
                        data={DATAFILTERED}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.cardWrapper}>
                                <CardHistory {...item} />
                            </View>
                        )}
                        contentContainerStyle={styles.listContainer}
                        pagingEnabled
                        showsHorizontalScrollIndicator={true}
                    />
                )
            }

        </View>
    )
}

export default PageHistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ededed",
        gap: 10,
    },
    listContainer: {
        gap: 5,
        alignItems: "center",
    },
    cardWrapper: {
        width: Dimensions.get('screen').width * 0.9,    
    },

    notfound: {
        textAlign: 'center',
        alignItems: 'center',
    },
    notFoundText: {
        fontSize: 30,
        color: '#009b41',
        fontWeight: 500,
        textAlign: 'center'
    }
})