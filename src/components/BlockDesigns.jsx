import { cn } from '../lib/utils';

function RunningBond({ className }) {
  return (
    <svg className={className} width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="56" height="24" rx="1.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="62.5" y="0.5" width="56" height="24" rx="1.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="-27.5" y="28.5" width="56" height="24" rx="1.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="34.5" y="28.5" width="56" height="24" rx="1.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="92.5" y="28.5" width="56" height="24" rx="1.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="0.5" y="56.5" width="56" height="24" rx="1.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="62.5" y="56.5" width="56" height="24" rx="1.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

function StackBond({ className }) {
  return (
    <svg className={className} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="42.5" y="0.5" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="0.5" y="42.5" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="42.5" y="42.5" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

function HexGrid({ className }) {
  return (
    <svg className={className} width="100" height="88" viewBox="0 0 100 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 1L49 14L49 40L25 53L1 40L1 14L25 1Z" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <path d="M75 1L99 14L99 40L75 53L51 40L51 14L75 1Z" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <path d="M50 35L74 48L74 74L50 87L26 74L26 48L50 35Z" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    </svg>
  );
}

function InterlockPattern({ className }) {
  return (
    <svg className={className} width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4L24 4L24 18L36 18L36 4L58 4L58 18L70 18L70 4L92 4L92 24L80 24L80 38L68 38L68 52L56 52L56 38L44 38L44 52L32 52L32 38L20 38L20 24L2 24L2 4Z" stroke="currentColor" strokeWidth="0.5" opacity="0.25" fill="none" />
      <path d="M36 24L48 24L48 38L36 38L36 24Z" stroke="currentColor" strokeWidth="0.5" opacity="0.15" fill="none" />
      <path d="M68 24L80 24L80 38L68 38L68 24Z" stroke="currentColor" strokeWidth="0.5" opacity="0.15" fill="none" />
    </svg>
  );
}

export default function BlockDesign({ variant = 'running-bond', className }) {
  const Comp = {
    'running-bond': RunningBond,
    'stack-bond': StackBond,
    'hex-grid': HexGrid,
    'interlock': InterlockPattern,
  }[variant] || RunningBond;

  return <Comp className={cn('block-design-svg', className)} />;
}
