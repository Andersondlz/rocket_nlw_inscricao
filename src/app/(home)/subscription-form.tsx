'use client'
import { Button } from "@/components/button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { User, Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const subscriptionSchema = z.object({
    name: z.string().min(2, 'Digite seu nome completo'),
    email: z.string().email('Digite um e-mail válido'),
})

type subscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
    const { register, handleSubmit, formState: { errors }, } = useForm<subscriptionSchema>({
        resolver: zodResolver(subscriptionSchema),
    })



    function onSubscribe(data: subscriptionSchema) {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubscribe)}
            className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
            <h2 className="text-gray-200 text-xl font-heading font-semibold">Inscrição</h2>
            <div className="space-y-3">
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <User />
                        </InputIcon>
                        <InputField type="text" placeholder="Nome Completo"
                            {...register('name')} />
                    </InputRoot>
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>

                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <Mail />
                        </InputIcon>
                        <InputField type="email" placeholder="E-mail"
                            {...register('email')} />
                    </InputRoot>
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>

            </div>
            <Button type="submit">
                Inscrever-se
                <ArrowRight />
            </Button>

        </form>
    )
}