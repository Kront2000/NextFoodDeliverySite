import React from "react";
import { cn } from "@/lib/utils";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Container } from "../container";

interface Props {
    className?: string;
    isAdmin?: boolean;
}

export const Hero: React.FC<Props> = ({ className, isAdmin = false }) => {

    return (
        <section className={cn('w-full flex flex-col items-center', className)}>
            
            <Container className="flex flex-col-reverse md:flex-row md:gap-8 gap-2 mb-10 md:mb-0">
                <Title isAdmin={isAdmin}/>
                <PizzaImage className="md:w-[60%]"></PizzaImage>
            </Container>    
        </section>
    );
};