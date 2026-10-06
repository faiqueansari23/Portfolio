import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Faique Akmal Ansari | React Native Developer',
  description:
    'React Native Developer experienced in building, deploying, and maintaining cross-platform mobile applications for Android and iOS, with apps published on the Google Play Store and Apple App Store. Strong hands-on expertise in React Native, REST API integration, Redux, and full-stack development with MERN & MySQL.',
  keywords: [
    'Faique Akmal Ansari',
    'React Native Developer',
    'Mobile Application Developer',
    'iOS App Development',
    'Android App Development',
    'Cross-Platform Mobile Developer',
    'Redux',
    'REST API',
    'Google Play Store Release',
    'Apple App Store Release',
    'TestFlight',
    'MERN Stack',
    'MySQL',
    'Salesforce Fresher',
  ],
  authors: [{ name: 'Faique Akmal Ansari' }],
  creator: 'Faique Akmal Ansari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faiqueansari.dev',
    title: 'Faique Akmal Ansari | React Native Developer',
    description:
      'Building production-ready cross-platform mobile applications for Android and iOS with React Native, REST APIs, and native capabilities.',
    siteName: 'Faique Akmal Ansari Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faique Akmal Ansari | React Native Developer',
    description:
      'React Native Developer specializing in cross-platform Android & iOS development, store releases, and full-stack applications.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#07080c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07080c] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
