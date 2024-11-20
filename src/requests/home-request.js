import http from 'k6/http';
import {check, sleep, group} from 'k6';
import {baseOnUrl} from '../utils/constants-utils.js';
import {headersUtils} from '../utils/headers-utils.js';
import {commonRequest} from './common-request.js';

export function verProdutosMaisVisualizadoRequest() {
    group('Ver Produtos Mais Visualizado', function() {
        const path = '/EinsteinCarousel-Load?components=%5B%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-76069%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-72267%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-16316%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-51912%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-16294%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-51896%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-7879%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-22345%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-30435%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-62747%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-7865%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-7609%22%7D%7D%5D&limit=15.0&recommender=HOME-mais-visualizados';
        const response = http.get(`${baseOnUrl}${path}`, {headers: headersUtils});
        check(response, {
            'status should be 200': (res) => res.status === 200,
        });
        commonRequest(response);
        sleep(1);
    });
}

export function verProdutosMaisVendidoRequest() {
    group('Ver Produtos Mais Vendido', function() {
        const path = '/EinsteinCarousel-Load?components=%5B%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-13830%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-91278%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-16316%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-55258%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-100046%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-9012%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-16294%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-7906%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-92153%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-77965%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-9481%22%7D%7D%2C%7B%22classxs%22%3A%22+col-6%22%2C%22classsm%22%3A%22+col-sm-6%22%2C%22classmd%22%3A%22+col-md-2%22%2C%22template%22%3A%22commerce_assets%2Fproduct%2FproductTileWrapper%22%2C%22swatches%22%3Atrue%2C%22displayratings%22%3Afalse%2C%22model%22%3A%7B%22type%22%3A%22product%22%2C%22id%22%3A%22M-51912%22%7D%7D%5D&limit=15.0&recommender=HOME-mais-vendidos';
        const response = http.get(`${baseOnUrl}${path}`, {headers: headersUtils});
        check(response, {
            'status should be 200': (res) => res.status === 200,
        });
        commonRequest(response);
        sleep(1);
    });
}

export function pesquisarSugeridosRequest() {
    group('Pesquisar produtos sugeridos', function() {
        const path = '/SearchServices-GetSuggestionsJson?q=&lang=pt_BR';
        const response = http.get(`${baseOnUrl}${path}`, {headers: headersUtils});
        check(response, {
            'status should be 200': (res) => res.status === 200,
        });
        commonRequest(response);
        sleep(1);
    });
}

export function pesquisarProdutoRequest() {
    group('Pesquisar produto dipirona', function() {
        const path = '/SearchServices-GetSuggestionsJson?q=dipirona&lang=pt_BR';
        const response = http.get(`${baseOnUrl}${path}`, {headers: headersUtils});
        check(response, {
            'status should be 200': (res) => res.status === 200,
        });
        commonRequest(response);
        sleep(1);
    });
}