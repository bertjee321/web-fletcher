import { Session } from "@/lib/models/sessions.models";
import { StyleContextSummaryList } from "./StyleContextSummaryList";

interface SessionCardProps {
  session: Session;
  onClick: (sessionId: string) => void;
  formatDate: (dateString: string) => string;
}

export const SessionCard = ({
  session,
  onClick,
  formatDate,
}: SessionCardProps) => {
  return (
    <div
      key={session.id}
      className="border border-[#d3c9b4] rounded-xl p-5 hover:border-[#b8a88a] hover:shadow-sm transition-all cursor-pointer"
      onClick={() => onClick(session.id)}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-[#2c2a24]">{session.name}</h3>
        <span className="text-xs text-[#6e6556] bg-[#f0ebe3] px-2 py-1 rounded">
          {session.styleContext.tone}
        </span>
      </div>

      <StyleContextSummaryList styleContext={session.styleContext} />

      <div className="mt-4 pt-3 border-t border-[#e8e3d8] flex justify-between items-center text-xs text-[#8e856f]">
        <span>Updated: {formatDate(session.updatedAt)}</span>
        <span>Created: {formatDate(session.createdAt)}</span>
      </div>
    </div>
  );
};
