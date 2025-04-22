import { cn } from '@/lib/utils';
import Logo from './logo';
import Navigation from '../navigation';

export default function Header({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <header className={cn('flex justify-between items-center', className)} {...props}>
      <Logo />
      <Navigation />
      <div>cart</div>
    </header>
  );
}
