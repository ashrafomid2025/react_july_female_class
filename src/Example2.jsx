import { useTranslation } from "react-i18next";

export default function Example2() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <nav className="w-full px-4 border-b bg-transparent backdrop-blur-md py-4 flex justify-between items-center">
        <h1>{t("logo")}</h1>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="py-2 px-8 rounded-xl bg-purple-500 text-white"
          >
            English
          </button>
          <button
            onClick={() => i18n.changeLanguage("pashto")}
            className="py-2 px-8 rounded-xl bg-purple-500 text-white"
          >
            پشتو
          </button>
          <button
            onClick={() => i18n.changeLanguage("fa")}
            className="py-2 px-8 rounded-xl bg-purple-500 text-white"
          >
            فارسی
          </button>
        </div>
      </nav>
      <div className="w-full max-w-6xl mx-auto flex justify-center items-center h-screen">
        <div className="border rounded-md flex flex-col gap-4  p-4">
          <h1 className="text-4xl font-bold bg-linear-60 from-purple-400 to-purple-800 text-transparent bg-clip-text">
            {t("title")}
          </h1>
          <p>{t("desc")}</p>
        </div>
      </div>
    </div>
  );
}
