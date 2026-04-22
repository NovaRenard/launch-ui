import { AlertCircle, Clock, TrendingDown } from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ProblemItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProblemProps {
  title?: string;
  description?: string;
  items?: ProblemItemProps[];
  className?: string;
}

export default function Problem({
  title = "Теряете клиентов из-за медленной обработки заявок?",
  description = "Знакомые проблемы малого и среднего бизнеса в России",
  items = [
    {
      title: "Потеря лидов",
      description: "Клиенты уходят к конкурентам, пока вы не успеваете ответить на заявки",
      icon: <TrendingDown className="size-5 stroke-1" />,
    },
    {
      title: "Медленная обработка",
      description: "Высокий поток обращений, а сотрудники не справляются с нагрузкой",
      icon: <Clock className="size-5 stroke-1" />,
    },
    {
      title: "Упущенные продажи",
      description: "Не успеваете квалифицировать лиды и записывать клиентов на консультации",
      icon: <AlertCircle className="size-5 stroke-1" />,
    },
  ],
  className,
}: ProblemProps) {
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
