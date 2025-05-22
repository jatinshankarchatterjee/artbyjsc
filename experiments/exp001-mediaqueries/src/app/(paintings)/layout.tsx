import "@/app/globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import HeaderPaintings from "@/components/header-paintings";
import FooterPaintings from "@/components/footer-paintings";

export default function PaintingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <HeaderPaintings />
        {children}
        <FooterPaintings />
      </ThemeProvider>
    </>
  );
}
