import React from "react";

interface WhiteButtonProps {
    text: string;
}

export default function WhiteButton({ text }: WhiteButtonProps) {
    return (
        <button className="font-medium bg-white text-black px-4 py-2 rounded-lg border-2 border-white transition-all hover:bg-transparent hover:text-white">
            {text}
        </button>
    );
}
