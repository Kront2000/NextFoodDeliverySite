
import React from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import { Container } from "../container";
import { CartButton } from "./cart-button";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {

    

    return (
        <header className={cn('flex flex-col items-center w-full ', className)}>
            <Container variant={"header"} className="flex justify-end p-2 lg:p-4 bg-gray-50/10 shadow-md rounded-b-xl @container">
                <nav className="flex gap-4 items-center">
                    <CartButton />
                    <Button className="lg:w-10 lg:h-10" size={"icon"} variant={"outline"}><Menu className="" /></Button>
                </nav>
            </Container>
        </header>
    );
};