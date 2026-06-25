'use client';

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type LucideRuntime = {
    createIcons: () => void;
};

declare global {
    interface Window {
        lucide?: LucideRuntime;
    }
}

export default function LucideIconsInitializer() {
    const pathname = usePathname();

    useEffect(() => {
        window.lucide?.createIcons();
    }, [pathname]);

    return null;
}