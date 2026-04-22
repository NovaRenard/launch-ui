"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Input } from "./input";
import { Label } from "./label";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [telegram, setTelegram] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTelegramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value && !value.startsWith("@")) {
      value = "@" + value.replace(/^@+/, "");
    }
    setTelegram(value);
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const validateTelegram = (telegramValue: string) => {
    return telegramValue.length >= 6 && telegramValue.startsWith("@");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateTelegram(telegram)) {
      setStatus("error");
      setErrorMessage("Пожалуйста, введите корректный никнейм в мессенджере (@username)");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      // TODO: Replace with actual API endpoint
      // For now, just log to console
      console.log("Новая заявка:", {
        telegram,
        timestamp: new Date().toISOString(),
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setTelegram("");

      // Close modal after 2 seconds
      setTimeout(() => {
        onOpenChange(false);
        setStatus("idle");
      }, 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      onOpenChange(false);
      setTelegram("");
      setStatus("idle");
      setErrorMessage("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Получить консультацию</DialogTitle>
          <DialogDescription>
            Оставьте свой контакт в мессенджере, и мы свяжемся с вами в ближайшее время
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold">Спасибо!</p>
            <p className="text-muted-foreground mt-2">
              Мы свяжемся с вами в ближайшее время
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="telegram">Мессенджер</Label>
              <Input
                id="telegram"
                type="text"
                placeholder="@username"
                value={telegram}
                onChange={handleTelegramChange}
                disabled={isLoading}
                className={status === "error" ? "border-red-500" : ""}
                autoComplete="off"
              />
              {status === "error" && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !telegram}
            >
              {isLoading ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
