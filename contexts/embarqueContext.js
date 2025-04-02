import { DATA } from '@/data/db.test';

import React, { createContext, useMemo, useState } from 'react';


const EmbarqueContext = createContext({});

function EmbarqueProvider({ children }) {
    const [ data, setData ] = useState(DATA)

    function acceptOn(data) {
        setData((prevData) => {
            const indiceData = prevData.findIndex(i => i.id === data.id)

            if(indiceData == -1) {
                console.error("Algo deu errado");
                return;
            }

            const novaArray = [...prevData];
            const dateref = new Date();

            novaArray[indiceData] = { ...novaArray[indiceData], gotoHistory: true, accepted: true, cancelled: false, acceptedAt: `${dateref.getFullYear()}/${dateref.getMonth()}/${dateref.getDay()} ${dateref.getHours()}:${dateref.getMinutes()}` };

            return novaArray;
        })
    }


    function cancelOn(data) {
        setData((prevData) => {
            const indiceData = prevData.findIndex(i => i.id === data.id)

            if(indiceData == -1) {
                console.error("Algo deu errado");
                return;
            }

            const novaArray = [...prevData];
            const dateref = new Date();

            novaArray[indiceData] = { ...novaArray[indiceData], gotoHistory: true, accepted: false, cancelled: true, acceptedAt: `${dateref.getFullYear()}/${dateref.getMonth()}/${dateref.getDay()} ${dateref.getHours()}:${dateref.getMinutes()}` };

            return novaArray;
        })
    }

    const value = useMemo(() => ({ data, acceptOn, cancelOn }), [data]);

    return (
        <EmbarqueContext.Provider value={value}>
            { children }
        </EmbarqueContext.Provider>
    );
}

export { EmbarqueProvider, EmbarqueContext };
