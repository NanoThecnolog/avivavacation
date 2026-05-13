interface BenefitCard {
    title: string,
    leftCard: {
        text: string
    },
    rightCard: {
        text: string
    }
}

export const benefitCards: BenefitCard[] = [
    {
        title: 'Planejamento',
        leftCard: {
            text: 'Caótico, demorado'
        },
        rightCard: {
            text: 'Simplificado, com suporte'
        }
    },
    {
        title: 'Flexibilidade',
        leftCard: {
            text: 'Poucas opções'
        },
        rightCard: {
            text: 'Mais opções com planejamento'
        }
    },
    {
        title: 'Acesso nos Destinos',
        leftCard: {
            text: 'Nada garantido'
        },
        rightCard: {
            text: 'Experiência facilitada'
        }
    },
    {
        title: 'Qualidade & Padrão',
        leftCard: {
            text: 'Inconsistente'
        },
        rightCard: {
            text: 'Confiável sempre'
        }
    },
    {
        title: 'Paz de Espírito',
        leftCard: {
            text: 'Surpresas no caminho'
        },
        rightCard: {
            text: 'Previsibilidade para viajar tranquilo'
        }
    },
    {
        title: 'Valor ao longo do tempo',
        leftCard: {
            text: 'Custos variáveis'
        },
        rightCard: {
            text: 'Melhor aproveitamento'
        }
    }
]