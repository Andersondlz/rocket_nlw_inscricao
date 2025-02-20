import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

export function Stats() {
    return (
        <div className="grid gap-3 md:grid-cols-3">
            <div className=" relative bg-gray-700 border border-gray-600 rounded-xl py-7 px-4 flex flex-col items-center justify-center gap-1">
                <span className="font-heading text-2xl font-semibold text-gray-200 liading-none">
                    1042
                </span>
                <span className="text-small text-gray-300 leaning-none text-center">
                    Acessos ao Link
                </span>
                <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
            </div>
            <div className="relative bg-gray-700 border border-gray-600 rounded-xl py-7 px-4 flex flex-col items-center justify-center gap-1">
                <span className="font-heading text-2xl font-semibold text-gray-200 liading-none">
                    1042
                </span>
                <span className="text-small text-gray-300 leaning-none text-center">
                    Incrição feitas
                </span>
                <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
            </div>
            <div className="relative bg-gray-700 border border-gray-600 rounded-xl py-7 px-4 flex flex-col items-center justify-center gap-1">
                <span className="font-heading text-2xl font-semibold text-gray-200 liading-none">
                    3º
                </span>
                <span className="text-small text-gray-300 leaning-none text-center">
                    Posição no ranking
                </span>
                <Medal className="size-5 text-purple absolute top-3 left-3" />
            </div>
        </div>
    )
}