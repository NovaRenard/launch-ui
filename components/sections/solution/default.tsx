import { Bot, MessageSquare, Zap } from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface SolutionItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface SolutionProps {
  title?: string;
  description?: string;
  items?: SolutionItemProps[];
  className?: string;
}

export default function Solution({
  title = "FlowAI решает это с помощью AI-агентов",
  description = "Автоматизируйте продажи и обработку заявок без найма новых сотрудников",
  items = [
    {
      title: "AI Sales Agent",
      description: "Квалифицирует лиды, отвечает на вопросы и подталкивает к покупке 24/7",
      icon: <Bot className="size-5 stroke-1" />,
    },
    {
      title: "Автозапись на встречу",
      description: "Запись на встречу или консультацию прямо в MAX",
      icon: <MessageSquare className="size-5 stroke-1" />,
    },
    {
      title: "Быстрое внедрение",
      description: "Готовые решения без сложной настройки CRM и долгой интеграции",
      icon: <Zap className="size-5 stroke-1" />,
    },
  ],
  className,
}: SolutionProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            {description}
          </p>
        </div>
        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((item, index) => (
            <Item key={index}>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>{item.icon}</ItemIcon>
                {item.title}
              </ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </Item>
          ))}
        </div>
      </div>
    </Section>
  );
}
