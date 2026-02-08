import { StyleContext } from "@/lib/models/style-context.model";

interface StyleContextSummaryListProps {
  styleContext: StyleContext;
}

export const StyleContextSummaryList = ({
  styleContext,
}: StyleContextSummaryListProps) => {
  return (
    <div className="text-sm text-[#6e6556] space-y-2">
      <p>
        <span className="font-medium">Color Scheme:</span>{" "}
        {styleContext.colorScheme}
      </p>
      <p>
        <span className="font-medium">Primary Color:</span>{" "}
        {styleContext.primaryColor}
      </p>
      <p>
        <span className="font-medium">Font:</span> {styleContext.font} •{" "}
        <span className="font-medium">Spacing:</span> {styleContext.spacing}
      </p>
      <p>
        <span className="font-medium">Border Radius:</span>{" "}
        {styleContext.borderRadius}
      </p>
    </div>
  );
};
