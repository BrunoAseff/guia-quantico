export const metadata = {
  title: "Guia Quântico",
  description: "Curso básico de Física Quântica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
