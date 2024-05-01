import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Swissborg, Invest in crypto assets the smart way',
  description:
    'Join thousands of smart users and start investing with the SwissBorg app',
  openGraph: {
    images: [
      {
        url: 'https://images.prismic.io/swissborg-website/e8573bff-5eec-40e6-994e-aff476e3367c_Opengraph-Homepage-Default-EN.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=80&rect=0%2C0%2C2400%2C1260&w=2400&h=1260',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
