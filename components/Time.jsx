import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';

const Time = () => {
    const [date, setDate] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const dateObj = new Date();
            setDate(`${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Text style={styles.time}>
            <AntDesign name="clockcircleo" size={24} /> {date}
        </Text>
    )
}

export default Time;

const styles = StyleSheet.create({
    time: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        color: 'green', 
        fontSize: 20,
        backgroundColor: '#ffffff',
        border: 0,
        borderRadius: 4,
        paddingTop: 10,
        paddingLeft: 30,
        paddingBottom: 10,
        paddingRight: 30,
    }
});