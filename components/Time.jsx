import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';

const Time = () => {
    const [date, setDate] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const dateObj = new Date();
            setDate(`${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}:${String(dateObj.getSeconds()).padStart(2, '0')}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Text style={styles.time}>
            <AntDesign name="clockcircleo" size={24} />  {date}
        </Text>
    )
}

export default Time;

const styles = StyleSheet.create({
    time: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'white', 
        border: '1px solid',
        fontSize: 20,
        borderRadius: 0,
        paddingTop: 10,
        paddingLeft: 30,
        paddingBottom: 10,
        paddingRight: 30,
    }
});