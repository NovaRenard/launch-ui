import {
  GraduationCap,
  Stethoscope,
  Flower,
  ShoppingCart,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface CaseProps {
  title: string;
  problem: string;
  solution: string;
  result: string;
  icon: ReactNode;
}

interface IndustryCasesProps {
  title?: string;
  cases?: CaseProps[] | false;
  className?: string;
}

export default function IndustryCases({
  title = "Как это работает в вашей нише",
  cases = [
    {
      title: "Образовательные центры",
      problem: "Родители звонят в нерабочее время, менеджеры не успевают обрабатывать заявки",
      solution: "AI-агент отвечает на вопросы о курсах, записывает на пробные занятия, отправляет расписание",
      result: "+40% записей на пробные уроки",
      icon: <GraduationCap className="size-5 stroke-1" />,
    },
    {
      title: "Клиники и медцентры",
      problem: "Пациенты не дозваниваются, теряются записи, администратор перегружен",
      solution: "AI-агент записывает на прием 24/7, напоминает о визитах, отвечает на частые вопросы",
      result: "+35% заполняемость расписания",
      icon: <Stethoscope className="size-5 stroke-1" />,
    },
    {
      title: "Цветочные магазины",
      problem: "Пик заказов перед праздниками, не успеваете отвечать всем клиентам",
      solution: "AI-агент принимает заказы, уточняет детали доставки, предлагает букеты",
      result: "+50% обработанных заказов в пиковые дни",
      icon: <Flower className="size-5 stroke-1" />,
    },
    {
      title: "E-commerce",
      problem: "Клиенты бросают корзины, не получив ответ на вопрос о товаре",
      solution: "AI-агент консультирует по товарам, помогает с выбором, возвращает брошенные корзины",
      result: "+25% конверсия из корзины в заказ",
      icon: <ShoppingCart className="size-5 stroke-1" />,
    },
  ],
  className,
}: IndustryCasesProps) {
  return (
    <Section className={className} id="industry-cases">
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {cases !== false && cases.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {cases.map((caseItem, index) => (
              <Item key={index} className="flex flex-col gap-3">
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{caseItem.icon}</ItemIcon>
                  {caseItem.title}
                </ItemTitle>
                <div className="flex flex-col gap-3 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Проблема:</span> {caseItem.problem}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Решение:</span> {caseItem.solution}
                  </p>
                  <div className="bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20 p-8 text-center my-2">
                    <p className="text-muted-foreground text-xs">Скриншот диалога</p>
                  </div>
                  <p className="font-semibold text-green-600 dark:text-green-400">
                    {caseItem.result}
                  </p>
                </div>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
