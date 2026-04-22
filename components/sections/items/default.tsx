import {
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Что входит в наши услуги",
  items = [
    {
      title: "Квалификация лидов",
      description: "AI-агент оценивает намерение клиента и приоритизирует горячие лиды",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Проактивные CTA",
      description: "Мягко подталкивает клиента к действию, не дожидаясь вопросов",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "Автозапись на встречу",
      description: "Записывает клиента на встречу или консультацию прямо в мессенджере",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Возврат сомневающихся клиентов",
      description: "Возвращает клиентов, которые пока выбирают, к следующему шагу",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Мессенджеры",
      description: "Работает в мессенджерах, таких как MAX и Telegram, где уже общаются ваши клиенты",
      icon: <LanguagesIcon className="size-5 stroke-1" />,
    },
    {
      title: "24/7 поддержка",
      description: "AI-агент работает круглосуточно без выходных",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4">
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
        )}
      </div>
    </Section>
  );
}
