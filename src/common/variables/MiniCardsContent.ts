import { IconType } from 'react-icons'
import { GoClock } from 'react-icons/go'
import { IoMdPaper } from 'react-icons/io'
import { PiHandbagSimple } from 'react-icons/pi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

export interface MiniCardsProps {
    icon: IconType
    title: string
    text: string
}

export const miniCardsContent = [
    {
        icon: GoClock,
        title: "Tempo",
        text: "Pare de buscar sem parar. Aqui tudo já está planejado."
    },
    {
        icon: RiMoneyDollarCircleLine,
        title: "Dinheiro",
        text: "Tarifas protegidas que cabem no seu planejamento."
    },
    {
        icon: PiHandbagSimple,
        title: "Vagas",
        text: "Planeje com antecedência e aproveite mais opções de datas."
    },
    {

        icon: IoMdPaper,
        title: "Resultado",
        text: "Férias que realmente acontecem, sem imprevistos."
    }
]