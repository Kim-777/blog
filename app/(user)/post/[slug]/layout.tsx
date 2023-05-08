import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="max-w-7xl mx-auto overflow-clip"
      >
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
