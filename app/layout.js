import Provider from "@/components/Provider";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
