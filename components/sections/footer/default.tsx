import { ReactNode } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import LaunchUI from "../../logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <LaunchUI />,
  name = "Flow AI",
  columns = [
    {
      title: "Навигация",
      links: [
        { text: "Решения", href: "#solution" },
        { text: "Тарифы", href: "#pricing" },
        { text: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Компания",
      links: [
        { text: "О нас", href: "/about" },
        { text: "Кейсы", href: "/cases" },
        { text: "Блог", href: "/blog" },
      ],
    },
    {
      title: "Контакты",
      links: [
        { text: "Telegram", href: "https://t.me/FlowAi_Manager" },
        { text: "Telegram канал", href: "https://t.me/Floww_Ai" },
      ],
    },
  ],
  copyright = "© 2026 Flow AI. Все права защищены",
  policies = [
    { text: "Политика конфиденциальности", href: "/privacy" },
    { text: "Условия использования", href: "/terms" },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                AI-агенты для автоматизации продаж в России
              </p>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex flex-wrap items-center gap-4">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
