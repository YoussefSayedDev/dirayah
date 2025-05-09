import { CopyRight } from "@/components/shared/copy-right";
import { LanguageSwitcher } from "@/components/shared/language-switcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      {children}
      <div className="absolute right-0 bottom-0 left-0 flex items-center justify-between gap-4 p-4">
        <CopyRight />
      </div>
      <div className="absolute top-0 right-0 left-0 flex items-center justify-between gap-4 p-4">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
