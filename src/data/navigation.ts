import { NavItem } from "@/types/navigation";

export const mainNavigation: NavItem[] = [
    { label: "Nosotros", href: "/#about" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Productos", href: "/#productos" },
    { label: "Contacto", href: "/#contact" },
    { label: "Solicitar demo", href: "/#contact", isCta: true },
];