import "./MyLabel.css";

export interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalize all letters
   */
  allCaps?: boolean;

  /**
   * Label Color
   */

  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Font color
   */
  fontColor?: string;

  /**
   * Background color
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${allCaps && "uppercase"} ${color} label`}
      style={{
        color: fontColor,
        backgroundColor,
      }}
    >
      {label}
    </span>
  );
};
