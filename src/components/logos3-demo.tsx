import { Logos3 } from "@/components/ui/logos3";

const demoData = {
  heading: "Компании, с которыми я работал",
  logos: [
    {
      id: "logo-segezha",
      description: "Сегежа Групп",
      image: "https://logo.clearbit.com/segezha-group.com",
      className: "w-[100px] h-[100px] object-contain",
    },
    {
      id: "logo-teboil",
      description: "Тебойл",
      image: "https://logo.clearbit.com/teboil.fi",
      className: "w-[100px] h-[100px] object-contain",
    },
    {
      id: "logo-mts",
      description: "МТС",
      image: "https://logo.clearbit.com/mts.ru",
      className: "w-[100px] h-[100px] object-contain",
    },
    {
      id: "logo-shell",
      description: "Shell",
      image: "https://logo.clearbit.com/shell.com",
      className: "w-[100px] h-[100px] object-contain",
    },
    {
      id: "logo-segezha-2",
      description: "Сегежа Групп",
      image: "https://logo.clearbit.com/segezha-group.com",
      className: "w-[100px] h-[100px] object-contain",
    },
    {
      id: "logo-teboil-2",
      description: "Тебойл",
      image: "https://logo.clearbit.com/teboil.fi",
      className: "w-[100px] h-[100px] object-contain",
    },
    {
      id: "logo-mts-2",
      description: "МТС",
      image: "https://logo.clearbit.com/mts.ru",
      className: "w-[100px] h-[100px] object-contain",
    },
    {
      id: "logo-shell-2",
      description: "Shell",
      image: "https://logo.clearbit.com/shell.com",
      className: "w-[100px] h-[100px] object-contain",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...demoData} />;
}

export { Logos3Demo };
