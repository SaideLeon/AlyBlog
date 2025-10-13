import Link from 'next/link';
import { Youtube, Instagram, Facebook, Twitter } from 'lucide-react';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { href: '#', icon: Youtube, label: 'YouTube' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
             <Link href="#" className="flex items-center gap-2 mb-4">
                <Logo className="h-8 w-8 text-primary" />
                <span className="font-bold font-headline text-2xl">Aly dos Santos</span>
              </Link>
              <p className="text-muted-foreground text-sm">Inspirando o mundo através da Kizomba. Uma batida de cada vez.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                  <h3 className="font-semibold mb-4">Navegação</h3>
                  <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Início</Link></li>
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Sobre</Link></li>
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Músicas</Link></li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-semibold mb-4">Mais</h3>
                  <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Quizzes</Link></li>
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Comunidade</Link></li>
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contato</Link></li>
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Termos</Link></li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-semibold mb-4">Social</h3>
                  <div className="flex items-center gap-2">
                    {socialLinks.map((social) => (
                      <Button key={social.label} variant="ghost" size="icon" asChild>
                        <Link href={social.href} aria-label={social.label}>
                          <social.icon className="h-5 w-5" />
                        </Link>
                      </Button>
                    ))}
                  </div>
              </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Aly dos Santos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
