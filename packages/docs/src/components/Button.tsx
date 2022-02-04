import clsx from "clsx";
import { Clickable } from "jump";
import { ComponentProps } from "react";
import { tw } from "../utils/tw";

type Tone = "accent" | "critical" | "caution" | "success" | "info" | "neutral";

const toneMap: Record<Tone, string> = {
  accent: tw`bg-accent-4 hover:bg-accent-5 active:bg-accent-6 text-accent-12`,
  critical: tw`bg-critical-4 hover:bg-critical-5 active:bg-critical-6 text-critical-12`,
  caution: tw`bg-caution-4 hover:bg-caution-5 active:bg-caution-6 text-caution-12`,
  success: tw`bg-success-4 hover:bg-success-5 active:bg-success-6 text-success-12`,
  info: tw`bg-info-4 hover:bg-info-5 active:bg-info-6 text-info-12`,
  neutral: tw`bg-gray-4 hover:bg-gray-5 active:bg-gray-6 text-gray-12`,
};

type Props = {
  tone?: Tone;
  fullWidth?: boolean;
} & ComponentProps<typeof Clickable>;

function Button({ tone = "neutral", fullWidth, ...clickableProps }: Props) {
  return (
    <Clickable
      className={clsx(
        "px-3 py-2 rounded font-medium justify-center",
        { "w-full": fullWidth },
        toneMap[tone]
      )}
      {...clickableProps}
    />
  );
}

export default Button;
