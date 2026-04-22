import Link from "next/link";
import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Часто задаваемые вопросы",
  items = [
    {
      question: "Сколько времени занимает внедрение?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          От 3 до 7 рабочих дней в зависимости от сложности интеграции
        </p>
      ),
    },
    {
      question: "Можно ли интегрировать с нашей текущей CRM?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Да, мы интегрируемся с популярными CRM или предлагаем нашу кастомную систему
        </p>
      ),
    },
    {
      question: "Что входит в ежемесячную плату?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Хостинг, обработка диалогов в рамках лимита тарифа, техподдержка и обновления
        </p>
      ),
    },
    {
      question: "Что если превысим лимит диалогов?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Дополнительные диалоги тарифицируются по 0.4 ₸ за переписку или можно перейти на старший тариф
        </p>
      ),
    },
    {
      question: "Можно ли переключиться между тарифами?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Да, вы можете изменить тариф в любой момент
        </p>
      ),
    },
    {
      question: "Какие мессенджеры поддерживаются?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          MAX. Интеграция с другими мессенджерами — по запросу
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
