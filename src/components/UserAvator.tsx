import Image from "next/image";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";
interface UserAvatorProps {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
}

export default function UserAvator({
  avatarUrl,
  size,
  className,
}: UserAvatorProps) {
  return (
    <Image
      src={avatarUrl || avatarPlaceholder}
      alt="User avatar"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
    />
  );
}
