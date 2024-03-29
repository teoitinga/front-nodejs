export interface Itemfinanciavel {
    representacaobd: string,//representação no banco de dados
    atividade: string,
    descricao: string,
    unidade: string,
}

export const ITENS_FINANCIAVEIS:  Itemfinanciavel[] = [
    {
        representacaobd: 'AQ_MATRIZES_LEITE',
        atividade: 'BOVINOCULTURA_LEITE',
        descricao: 'Aquisição de matrizes leiteiras',
        unidade: 'CAB'
    },
    {
        representacaobd: 'AQ_MATRIZES_CORTE',
        atividade: 'BOVINOCULTURA_CORTE',
        descricao: 'Aquisição de matrizes zebuinas para corte',
        unidade: 'CAB'
    },
    {
        representacaobd: 'AQ_BEZERROS_CORTE_CUSTEIO',
        atividade: 'BOVINOCULTURA_CORTE',
        descricao: 'Aquisição de Bezerros com Custeio',
        unidade: 'CAB'
    },
    {
        representacaobd: 'CUSTEIO_BEZERROS_CORTE',
        atividade: 'BOVINOCULTURA_CORTE',
        descricao: 'Custeio de bezerros de corte',
        unidade: 'CAB'
    },
    {
        representacaobd: 'CUSTEIO_MATRIZES_LEITE',
        atividade: 'BOVINOCULTURA_LEITE',
        descricao: 'Custeio de matrizes leiteiras',
        unidade: 'CAB'
    },
    {
        representacaobd: 'CUSTEIO_MATRIZES_CORTE',
        atividade: 'BOVINOCULTURA_CORTE',
        descricao: 'Custeio de matrizes zebuinas',
        unidade: 'CAB'
    },
    {
        representacaobd: 'AQ_MATRIZES_CORTE_CUSTEIO',
        atividade: 'BOVINOCULTURA_CORTE',
        descricao: 'Aquisição de matrizes zebuinas com Custeio',
        unidade: 'CAB'
    },
    {
        representacaobd: 'AQ_MATRIZES_LEITE_CUSTEIO',
        atividade: 'BOVINOCULTURA_LEITE',
        descricao: 'Aquisição de matrizes leiteiras com Custeio',
        unidade: 'CAB'
    },
    {
        representacaobd: 'AQ_TRATOR',
        atividade: 'BOVINOCULTURA_LEITE',
        descricao: 'Aquisição de trator',
        unidade: 'UN'
    },
    {
        representacaobd: 'AQ_CARRETA_AGRICOLA',
        atividade: 'BOVINOCULTURA',
        descricao: 'Aquisição de carreta agrícola',
        unidade: 'UN'
    },
    {
        representacaobd: 'AQ_COLHEITADEIRA',
        atividade: 'BOVINOCULTURA',
        descricao: 'Aquisição de colheitadeira',
        unidade: 'UN'
    },
    {
        representacaobd: 'AQ_PAINEL_FOTOVOLTAICO',
        atividade: 'BOVINOCULTURA',
        descricao: 'Aquisição de paineis fotovoltáicos',
        unidade: 'KW' //potência do modelo
    },
    {
        representacaobd: 'REFORMA_CURRAL',
        atividade: 'BOVINOCULTURA',
        descricao: 'Reforma de curral',
        unidade: 'metro'
    },
    {
        representacaobd: 'REFORMA_PASTAGEM',
        atividade: 'BOVINOCULTURA',
        descricao: 'Reforma de pastagem',
        unidade: 'hectare'
    },
    {
        representacaobd: 'REFORMA_CERCA',
        atividade: 'BOVINOCULTURA',
        descricao: 'Reforma de cerca',
        unidade: 'km'
    },
    {
        representacaobd: 'CONSTRUCAO_CERCA',
        atividade: 'BOVINOCULTURA',
        descricao: 'Construção de cerca',
        unidade: 'km'
    },
    {
        representacaobd: 'FORMACAO_PASTAGEM',
        atividade: 'BOVINOCULTURA',
        descricao: 'Formação de pastagem',
        unidade: 'hectare'
    },
    {
        representacaobd: 'CONSTRUCAO_CURRAL',
        atividade: 'BOVINOCULTURA',
        descricao: 'Construção de curral',
        unidade: 'metro'
    },
    {
        representacaobd: 'CONSTRUCAO_GALPAO',
        atividade: 'CAFE',
        descricao: 'Construção de galpão beneficiamento café',
        unidade: 'm2'
    },
    {
        representacaobd: 'AQ_SECADOR_CAFE',
        atividade: 'CAFE',
        descricao: 'Aq. Secador Café',
        unidade: 'UN'
    },
]