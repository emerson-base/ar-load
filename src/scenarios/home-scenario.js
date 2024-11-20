import {commonScenario} from './common-scenario.js';

export const produtosMaisVisualizadoScenario = Object.freeze({
    ...commonScenario,
    tags: {
        tag: 'produtos-mais-visualizado'
    },
    exec: 'verProdutosMaisVisualizadoRequest',
});

export const produtosMaisVendidoScenario = Object.freeze({
    ...commonScenario,
    tags: {
        tag: 'produtos-mais-vendido'
    },
    exec: 'verProdutosMaisVendidoRequest',
});

export const pesquisaDeSugeridosScenario = Object.freeze({
    ...commonScenario,
    tags: {
        tag: 'pesquisa-de-sugeridos'
    },
    exec: 'pesquisarSugeridosRequest',
});