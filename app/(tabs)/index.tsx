import React, { useContext, useRef, useState, useEffect } from "react";
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

    const dataIsNotAccept = data.filter((dataSingle) => !dataSingle.gotoHistory);

    const scrollToIndex = (index) => {
        if (!flatListRef.current || index < 0 || index >= dataIsNotAccept.length) return;
        flatListRef.current.scrollToIndex({
            index,
            animated: true,
        });
        setCurrentIndex(index);
    };

    // Corrige o índice se o item atual foi removido
    useEffect(() => {
        if (currentIndex >= dataIsNotAccept.length && dataIsNotAccept.length > 0) {
            const newIndex = dataIsNotAccept.length - 1;
            scrollToIndex(newIndex);
        }

        if (dataIsNotAccept.length === 0) {
            setCurrentIndex(0);
        }
    }, [dataIsNotAccept.length]);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = {
        viewAreaCoveragePercentThreshold: 50,
    };

    return (
        <View style={{ flex: 1 }}>
            <Header />
            {dataIsNotAccept.length === 0 ? (
                <View style={styles.box_is_empty}>
                    <Image source={require('@/assets/images/Emptys.png')} style={styles.box_is_empty_img} />
                    <Text style={styles.box_is_empty_text}>Não há embarques no momento...</Text>
                </View>
            ) : (
                <View style={styles.container}>
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
                                <View style={styles.cardWrapper}><Card {...item} /></View>
                            )}
                            contentContainerStyle={styles.listContainer}
                            snapToAlignment="center"
                            pagingEnabled={false}
                            scrollEnabled={false}
                            snapToInterval={width}
                            decelerationRate="fast"
                            showsHorizontalScrollIndicator={false}
                            onViewableItemsChanged={onViewableItemsChanged}
                            viewabilityConfig={viewabilityConfig}
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
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    carouselContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    cardWrapper: { 
        width: width * 0.83, 
        justifyContent: "center",
        alignItems: "center",
    },
    navButton: {
        width: 100,
        height: 100,
        borderRadius: 30,
        backgroundColor: "#009b41",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    disabledButton: {
        backgroundColor: "#adadad",
    },
});
