import React, { useState } from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { DATA } from "@/data/db.test";
import { ScrollView, FlatList, StyleSheet, View, Dimensions, Text } from "react-native";

const { width } = Dimensions.get("window");

const PageIndex = () => {
    const [data, setData] = useState(DATA);

    const handleAccept = (id) => {
        const updatedData = data.map(item => 
            item.id === id ? { ...item, accepted: true, acceptedAt: Date.now() } : item
        );
        setData(updatedData);
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Gerenciamento de Entradas e Saidas (Balança)</Text>
                <FlatList
                    horizontal
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => !item.accepted ? (
                        <View style={styles.cardWrapper}>
                            <Card {...item} onAccept={handleAccept} />
                        </View>
                    ) : null}
                    contentContainerStyle={styles.listContainer}
                    snapToAlignment="center"
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    );
};

export default PageIndex;

const styles = StyleSheet.create({
    title: {
        color: 'green',
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
    },
    container: {
        height: 'auto',
        justifyContent: 'center',
        gap: 10,
    },
    listContainer: {
        gap: 5,
        alignItems: "center",
    },
    cardWrapper: {
        width: width > 500 ? width * 0.51 : width * 0.90,
        justifyContent: 'center',
        paddingBottom: 50,
    },
});