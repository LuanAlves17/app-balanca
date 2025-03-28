import React, { useContext, useRef, useState } from "react";
import { FlatList, StyleSheet, View, Dimensions, Text, Image, TouchableOpacity } from "react-native";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { EmbarqueContext } from "@/contexts/embarqueContext";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const { width } = Dimensions.get("window");

const PageIndex = () => {
    const { data } = useContext(EmbarqueContext);
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const dataIsNotAccept = data.filter((dataSingle) => !dataSingle.accepted);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 50,
    };

    const getItemLayout = (_, index) => ({
        length: width * 0.91,
        offset: width * 0.91 * index,
        index,
    });

    const scrollToIndex = (index) => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index,
                animated: true,
            });
            setCurrentIndex(index);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Header />
            {dataIsNotAccept.length === 0 ? (
                <View style={styles.box_is_empty}>
                    <Image style={styles.box_is_empty_img} source={require("@/assets/images/Emptys.svg")} />
                    <Text style={styles.box_is_empty_text}>Não há embarques no momento...</Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.title}>Gerenciamento de Entradas e Saídas (Balança)</Text>

                    <View style={styles.carouselContainer}>
                        <TouchableOpacity 
                            style={[styles.navButton, currentIndex === 0 && styles.disabledButton]} 
                            onPress={() => scrollToIndex(currentIndex - 1)}
                            disabled={currentIndex === 0}
                        >
                            <MaterialIcons name="navigate-before" size={28} color="white" />
                        </TouchableOpacity>

                        <FlatList
                            ref={flatListRef}
                            horizontal
                            data={dataIsNotAccept}
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
                            onViewableItemsChanged={onViewableItemsChanged}
                            viewabilityConfig={viewabilityConfig}
                            getItemLayout={getItemLayout}
                            scrollEnabled={false}
                        />

                        <TouchableOpacity 
                            style={[styles.navButton, currentIndex === dataIsNotAccept.length - 1 && styles.disabledButton]} 
                            onPress={() => scrollToIndex(currentIndex + 1)}
                            disabled={currentIndex === dataIsNotAccept.length - 1}
                        >
                            <MaterialIcons name="navigate-next" size={28} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

export default PageIndex;

const styles = StyleSheet.create({
    title: {
        color: "green",
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: "center",
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
        flex: 1,
        justifyContent: "center",
        gap: 10,
    },
    listContainer: {
        gap: 5,
        alignItems: "center",
    },
    carouselContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    cardWrapper: {
        width: '100vw',
        justifyContent: "center",
        paddingBottom: 50,
    },
    navButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#009b41",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    disabledButton: {
        backgroundColor: "#adadad",
    },
});
