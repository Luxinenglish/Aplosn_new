// ConsoleTroll.jsx
import React from "react";
import { useConsoleTroll } from "./useConsoleTroll";

export default function ConsoleTroll() {
    useConsoleTroll({
        stickerUrl: "https://i.imgur.com/6RL6xQy.png", // remplace si tu veux
        once: true,
        prefix: "[PIXELSERVER]",
    });
    return null; // rien à afficher côté UI, tout est dans la console
}
