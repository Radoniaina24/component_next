'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, ...rest }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} {...rest} className={isActive ? 'text-purple-500' : ''} />
  );
}
