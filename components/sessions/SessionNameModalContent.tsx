import { Button } from "../ui/Button";
import { TextInput } from "../ui/TextInput";

interface SessionNameModalContentProps {
  sessionName: string;
  setSessionName: (value: string) => void;
  onSessionNameSubmit: () => void;
}

export const SessionNameModalContent = ({
  sessionName,
  setSessionName,
  onSessionNameSubmit,
}: SessionNameModalContentProps) => {
  return (
    <>
      <TextInput
        placeholder="E.g., 'My SaaS Landing Page Layout'"
        value={sessionName}
        setValue={(value) => setSessionName(value)}
      />
      <Button
        className="mt-4 w-full bg-[#7a5f3e] hover:bg-[#8b7355] text-white font-medium py-2 rounded-lg transition-colors"
        onClick={onSessionNameSubmit}
      >
        Submit
      </Button>
    </>
  );
};
