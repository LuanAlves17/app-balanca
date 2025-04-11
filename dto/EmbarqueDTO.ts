type EmbarqueDTO = {
    id: Number,
    peso: String,
    placa: String,
    dataConfirmacao: Date
}

const enumSituation = {
    AGUARDANDO: 'AGUARDANDO',
    CONFIRMADO: 'CONFIRMADO',
    DESISTENTE: 'DESISTENTE'
}

export { EmbarqueDTO, enumSituation };