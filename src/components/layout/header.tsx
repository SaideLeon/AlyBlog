import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Youtube, Instagram, Facebook, Twitter } from 'lucide-react';
import { Logo } from '@/components/icons';

const navLinks = [
  { href: '#', label: 'Início' },
  { href: '#', label: 'Sobre' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Músicas' },
  { href: '#', label: 'Quizzes' },
  { href: '#', label: 'Fãs' },
  { href: '#', label: 'Contato' },
];

const socialLinks = [
  { href: '#', icon: Youtube, label: 'YouTube' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="#" className="flex items-center gap-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline text-lg">Aly dos Santos</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button key={social.label} variant="ghost" size="icon" asChild>
                <Link href={social.href} aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <Logo className="h-6 w-6 text-primary" />
                  <span className="ml-2 font-bold font-headline text-lg">Aly dos Santos</span>
                </div>
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex justify-center gap-4">
                  {socialLinks.map((social) => (
                    <Button key={social.label} variant="ghost" size="icon" asChild>
                      <Link href={social.href} aria-label={social.label}>
                        <social.icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
