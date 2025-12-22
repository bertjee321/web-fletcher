type NoticeBoxType = "regular" | "warning" | "error";

const variantStyles: Record<
  NoticeBoxType,
  { container: string; title: string; text: string; icon?: string }
> = {
  regular: {
    container: "bg-blue-50 border-blue-200",
    title: "text-blue-800",
    text: "text-blue-700",
  },
  warning: {
    container: "bg-yellow-50 border-yellow-200",
    title: "text-yellow-800",
    text: "text-yellow-700",
    icon: "⚠️",
  },
  error: {
    container: "bg-red-50 border-red-200",
    title: "text-red-800",
    text: "text-red-700",
    icon: "❌",
  },
};

export const NoticeBox = ({
  type = "regular",
  title,
  text,
  className,
}: {
  type?: NoticeBoxType;
  title?: string;
  text: string;
  className?: string;
}) => {
  const styles = variantStyles[type];

  return (
    <div
      className={`p-4 border rounded-lg ${styles.container} ${className ?? ""}`}
    >
      <div className="flex gap-3">
        {styles.icon && <span className="text-lg">{styles.icon}</span>}
        <div className="flex-1">
          {title && <p className={`font-medium ${styles.title}`}>{title}</p>}
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};