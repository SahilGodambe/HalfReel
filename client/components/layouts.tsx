// components/Layout.tsx
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean; // optional prop
}

export default function Layout({ children, showNavbar = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-auto md:overflow-hidden">
      {showNavbar && <Navigation />}
      {children}
    </div>
  );
}
