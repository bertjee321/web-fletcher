"use client";

import {
  BorderRadiusInput,
  ColorSchemeInput,
  DesignBriefInput,
  FontInput,
  PrimaryColorInput,
  SpacingInput,
  ToneInput,
} from "@/components/design/style-inputs";
import { StyleContext } from "@/lib/models/style-context.model";
import { Button } from "../ui/Button";
import GeneratedOutput from "./output/GeneratedOutput";

interface DesignConfigFormProps {
  styleContext: StyleContext;
  setStyleContext: (value: StyleContext) => void;
  onSubmit: () => void;
}

const DesignConfigForm = ({
  styleContext,
  setStyleContext,
  onSubmit,
}: DesignConfigFormProps) => {
  return (
    <div className="space-y-4 mt-4">
      <ColorSchemeInput
        value={styleContext.colorScheme}
        setValue={(value) =>
          setStyleContext({ ...styleContext, colorScheme: value })
        }
      />

      <PrimaryColorInput
        value={styleContext.primaryColor}
        setValue={(value) =>
          setStyleContext({ ...styleContext, primaryColor: value })
        }
      />

      <BorderRadiusInput
        value={styleContext.borderRadius}
        setValue={(value) =>
          setStyleContext({ ...styleContext, borderRadius: value })
        }
      />

      <ToneInput
        value={styleContext.tone}
        setValue={(value) => setStyleContext({ ...styleContext, tone: value })}
      />

      <FontInput
        value={styleContext.font}
        setValue={(value) => setStyleContext({ ...styleContext, font: value })}
      />

      <SpacingInput
        value={styleContext.spacing}
        setValue={(value) =>
          setStyleContext({ ...styleContext, spacing: value })
        }
      />

      <DesignBriefInput
        value={styleContext.designBrief ?? ""}
        setValue={(value) =>
          setStyleContext({ ...styleContext, designBrief: value })
        }
      />

      <Button
        className="mt-4 w-full bg-[#7a5f3e] hover:bg-[#8b7355] text-white font-medium py-2 rounded-lg transition-colors"
        onClick={onSubmit}
      >
        🏹 Fletch Layout
      </Button>

      <GeneratedOutput />
    </div>
  );
};

export default DesignConfigForm;
