import classNames from "classnames";

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
  between?: boolean;
  col?: boolean;
  wrap?: boolean;
}

const Flex = ({
  children,
  className,
  between,
  center,
  col,
  wrap,
}: FlexProps) => {
  const styles = classNames({
    "justify-between": between,
    "justify-center": center,

    "flex-col": col,
    "flex-wrap": wrap,
  });
  return <div className={`flex ${styles} ${className}`}>{children}</div>;
};

export default Flex;
