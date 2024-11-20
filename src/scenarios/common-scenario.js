console.log(__ENV.STAGES_SET);

const env = JSON.parse(__ENV.STAGES_SET ?? null);

console.log(env);

export const commonScenario = Object.freeze({
    executor: 'ramping-arrival-rate', // shared-iterations
    preAllocatedVUs: 50,
    maxVUs: 100,
    env: {
        ENV: 'prod'
    },
    stages: env ?? [
        // estágios de teste de carga
        {
            duration: "5s",
            target: 2,
        }, // durante 1 minuto 100 usuários serão executados
        {
            duration: "10s",
            target: 4,
        }, // mantém por 2 minutos a carga de 100 usuários
        {
            duration: "4s",
            target: 0,
        }, // passou os 2 minutos começa a diminuir a carga até 0 durante 1 minuto
    ],
    // vus: 10,
    // iterations: 100,
    // maxDuration: '10s',
});