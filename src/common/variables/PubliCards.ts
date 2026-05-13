import { IconType } from "react-icons"
import { CiCalendar } from "react-icons/ci"
import { FaHeart, FaLeaf, FaRegStar } from "react-icons/fa"
import { LuShieldCheck } from "react-icons/lu"

interface Props {
    icon: IconType,
    title: string,
    text: string
}


export const PubliCards: Props[] = [
    {
        icon: CiCalendar,
        title: 'Férias garantidas',
        text: 'Momentos especiais planejados com tranquilidade.'
    },
    {
        icon: FaRegStar,
        title: 'Experiências duradouras',
        text: 'Viagens que fortalecem vínculos e viram boas lembranças.'
    },
    {
        icon: LuShieldCheck,
        title: 'Planejamento inteligente',
        text: 'Organização antecipada para férias mais leves.'
    },
    {
        icon: FaLeaf,
        title: 'Qualidade de vida',
        text: 'Tempo de descanso e lazer que fazem diferença no dia a dia.'
    },
    {
        icon: FaHeart,
        title: 'Legado familiar',
        text: 'Tradições que acompanham sua família ao longo das gerações.'
    }
]