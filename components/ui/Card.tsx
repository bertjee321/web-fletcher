const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const defaultStyle = "border-[#e3d6c1] bg-[#fffaf3] shadow-md rounded-2xl";

  return <div className={className ?? defaultStyle}>{children}</div>;
};

const CardHeader = ({
  title,
  byline,
  className,
}: {
  title: string;
  byline?: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold text-[#3f3a2f] mb-1">{title}</h2>
      <p className="text-sm text-[#6e6556]">{byline}</p>
    </div>
  );
};

const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const defaultStyle = "space-y-4";

  return <div className={className ?? defaultStyle}>{children}</div>;
};

export { Card, CardBody, CardHeader };
