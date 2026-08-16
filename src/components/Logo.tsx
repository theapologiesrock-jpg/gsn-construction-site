interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="/assets/logo-mark-sm.png"
      alt="GSN Construction LLC"
      className={className}
      width={480}
      height={312}
    />
  );
}
