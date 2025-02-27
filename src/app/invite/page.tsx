import logo from "../../assets/Logo.svg"

import Image from "next/image"
import { Ranking } from "./ranking"
import { Stats } from "./stats"
import { InviteLinkInput } from "./invite-link-input"
export default function InvitePage() {

    const inviteLink = "https://devstage.com/inscricao/454s57d8ss555"

    return (
        <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
            <div className="flex flex-col gap-10 w-full max-w-[550px]">
                <Image src={logo} alt="logo da devstage" width={108.5} height={30} />
                <div className="space-y-2">
                    <h1 className="text-4xl text-gray-100 font-heading font-bold leading-none">Incrição Confirmada!</h1>
                    <p className="text-gray-300">Para entrar no evento, acesse o link de inscrição enviado por email:</p>
                </div>
                <div className="space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-gray-200 text-2xl font-heading font-semibold leading-none">Indique e Ganhe</h2>
                        <p className="text-gray-300">Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link abaixo e acompanhar as inscrições:</p>
                    </div>

                    <InviteLinkInput inviteLink={inviteLink} />

                    <Stats />

                </div>
            </div>
            <Ranking />
        </div>
    )
}