"use client";

import { User, Users } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";
import { ContactModal } from "../../ui/contact-modal";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Выберите подходящий тариф",
  description = "Все тарифы включают настройку, интеграцию с мессенджерами и техподдержку",
  plans,
  className = "",
}: PricingProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const defaultPlans: PricingColumnProps[] = [
    {
      name: "Старт",
      icon: <User className="size-4" />,
      description: "Для небольших команд и стартапов",
      price: 65000,
      priceNote: "Настройка 65,000 ₽ + 5,000 ₽/мес",
      cta: {
        variant: "default",
        label: "Начать",
        href: "#cta",
        onClick: () => setIsContactModalOpen(true),
      },
      features: [
        "До 500 диалогов/мес",
        "Интеграция WhatsApp или Telegram (на выбор)",
        "Базовая аналитика",
        "Email поддержка",
      ],
      variant: "default",
    },
    {
      name: "Бизнес",
      icon: <Users className="size-4" />,
      description: "Для растущих компаний",
      price: 75000,
      promotionText: "Рекомендуем",
      priceNote: "Настройка 75,000 ₽ + 12,000 ₽/мес",
      cta: {
        variant: "glow",
        label: "Выбрать",
        href: "#cta",
        onClick: () => setIsContactModalOpen(true),
      },
      features: [
        "До 2000 диалогов/мес",
        "Интеграция WhatsApp + Telegram (оба)",
        "Расширенная аналитика",
        "Приоритетная поддержка",
        "Обучение команды",
      ],
      variant: "glow-brand",
    },
  ];

  const finalPlans = plans || defaultPlans;

  return (
    <>
      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
      <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {finalPlans.length > 0 && (
          <>
            <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
              {finalPlans.map((plan) => (
                <PricingColumn
                  key={plan.name}
                  name={plan.name}
                  icon={plan.icon}
                  description={plan.description}
                  price={plan.price}
                  originalPrice={plan.originalPrice}
                  promotionText={plan.promotionText}
                  priceNote={plan.priceNote}
                  cta={plan.cta}
                  features={plan.features}
                  variant={plan.variant}
                  className={plan.className}
                  currency="₽"
                  period="настройка"
                />
              ))}
            </div>
            <div className="glass-1 dark:glass-3 max-w-2xl rounded-2xl p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold">Кастомная CRM</h3>
              <p className="text-muted-foreground mb-4">
                Адаптируем CRM под ваши бизнес-процессы
              </p>
              <p className="text-2xl font-bold">+55,000 ₽ <span className="text-muted-foreground text-base font-normal">(разовая настройка)</span></p>
            </div>
          </>
        )}
      </div>
    </Section>
    </>
  );
}
