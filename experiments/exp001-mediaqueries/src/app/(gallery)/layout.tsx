import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import FooterGallery from "@/components/footer-gallery";
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
        <Header />
        {children}
        <FooterGallery />
      </ThemeProvider>
    </>
  );
}
