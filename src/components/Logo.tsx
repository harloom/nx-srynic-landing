import Image from "next/image";

type LogoProps = {
  size?: number;
  showWordmark?: boolean;
};

export default function Logo({ size = 36, showWordmark = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.webp"
        alt="SRYNIC logo"
        width={size}
        height={size}
        priority
        className="object-contain"
      />
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className="text-base font-bold tracking-wide text-foreground">
            SRYNIC
          </span>
          <span className="text-[9px] tracking-[0.2em] text-muted uppercase mt-0.5">
            Future in Hand
          </span>
        </div>
      )}
    </div>
  );
}
