// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "MD Interstate Moving",
  description: "State & Interstate Moving — No Broker Fee",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
