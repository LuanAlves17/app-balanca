import React, { useContext, useState } from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { DATA } from "@/data/db.test";
import { ScrollView, FlatList, StyleSheet, View, Dimensions, Text, Image } from "react-native";
import { EmbarqueContext } from "@/contexts/embarqueContext";

const { width } = Dimensions.get("window");

const PageIndex = () => {
    const { data } = useContext(EmbarqueContext)

    const dataIsNotAccept = data.filter((dataSingle) => !dataSingle.accepted)

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Header />
            {
                dataIsNotAccept.length == 0 ? (
                    <View style={styles.box_is_empty}>
                        <Image style={styles.box_is_empty_img} source={require("@/assets/images/Emptys.svg")}/>

                        <Text style={styles.box_is_empty_text}>Não há embarques no momento...</Text>
                    </View>
                ) : 
                (
                    <View style={styles.container}>
                        <Text style={styles.title}>Gerenciamento de Entradas e Saidas (Balança)</Text>
                        <FlatList
                            horizontal
                            data={dataIsNotAccept}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>  (
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
                )
            }
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
    box_is_empty: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box_is_empty_img: {
        width: 400,
        height: 400,
        resizeMode: "contain",
    },
    box_is_empty_text: {
        fontSize: 20,
        color: "#009b41",
        fontWeight: "500",
        textAlign: "center",
        marginTop: 10,
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