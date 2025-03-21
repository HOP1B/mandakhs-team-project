import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "./components/layout/Navbar";
import type React from "react";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <header>
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
            </header>

            <SignedIn>
              <Navbar />
              {children}
            </SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
