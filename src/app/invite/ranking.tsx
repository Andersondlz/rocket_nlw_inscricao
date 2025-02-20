import Image from "next/image"
import gold from "../../assets/medal-gold.svg"
import silver from "../../assets/medal-silver.svg"
import cooper from "../../assets/medal-cooper.svg"

export function Ranking() {
    return (
        <div className="w-full max-w-[440px] space-y-5">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                Ranking de indicação
            </h2>

            <div className="space-y-4">
                <div className="relative flex flex-col rounded-xl bg-gray-700 border border-gray-600 p-6 justify-center gap-3">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">1º</span> |
                        Anderson da Luz
                    </span>
                    <span className="font-heading text-gray-300 font-semibold leading-none">
                        1030
                    </span>
                    <Image src={gold} alt="Medalha de Ouro" width={40} height={40} className="absolute top-0 right-8" />
                </div>
                <div className="relative flex flex-col rounded-xl bg-gray-700 border border-gray-600 p-6 justify-center gap-3">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">2º</span> |
                        Vanessa Angelica K da Luz
                    </span>
                    <span className="font-heading text-gray-300 font-semibold leading-none">
                        988
                    </span>
                    <Image src={silver} alt="Medalha de Ouro" width={40} height={40} className="absolute top-0 right-8" />
                </div>
                <div className="relative flex flex-col rounded-xl bg-gray-700 border border-gray-600 p-6 justify-center gap-3">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">3º</span> |
                        Matheus Augusto K da Luz
                    </span>
                    <span className="font-heading text-gray-300 font-semibold leading-none">
                        950
                    </span>
                    <Image src={cooper} alt="Medalha de Ouro" width={40} height={40} className="absolute top-0 right-8" />
                </div>

            </div>
        </div>
    )
}