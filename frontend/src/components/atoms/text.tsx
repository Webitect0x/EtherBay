import classNames from "classnames";

interface TextProps {
  italic?: boolean;
  center?: boolean;
  bold?: boolean;
  thin?: boolean;
  size?: string;
  as?: "span" | "p";
  children: React.ReactNode;
}

const Text = ({
  italic = false,
  center = false,
  bold = false,
  thin = false,
  size = "m",
  as = "span",
  children,
}: TextProps) => {
  const styles = classNames({
    italic: italic,
    "text-center": center,
    "font-bold": bold,
    "font-thin": thin,
    "text-xs": size === "xs",
    "text-s": size === "s",
    "text-m": size === "m",
    "text-l": size === "l",
    "text-xl": size === "xl",
    "text-2xl": size === "2xl",
    "text-3xl": size === "3xl",
    "text-4xl": size === "4xl",
  });

  if (as === "span") {
    return <span className={styles}>{children}</span>;
  } else {
    return <p className={styles}>{children}</p>;
  }
};

export default Text;
