import { htmlReport } from "./src/libs/k6-reporter-bundle.js";
import scenarios from './src/scenarios/scenario.js';

export function handleSummary(data) {
    return {
        "results/summary.html": htmlReport(data),
    };
}

export {verProdutosMaisVisualizadoRequest, verProdutosMaisVendidoRequest, pesquisarSugeridosRequest, pesquisarProdutoRequest} from './src/requests/home-request.js';

export const options = {
    ...scenarios,
    thresholds: {
        http_req_duration: ['p(95)<2000'], // 95% da requisições devem responder em até 2 segundos
        http_req_failed: ['rate<0.01'], // 1% das requisições podem ocorrer erro
    },
};