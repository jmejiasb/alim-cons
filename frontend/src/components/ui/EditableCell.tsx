import { useState } from "react";
import { Input } from "./input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./select";
import { Textarea } from "./textarea";

type CellType = "text" | "number" | "select";

interface EditabeCellProps {
  type: CellType;
  value: string | number | undefined;
  options?: { label: string; value: string }[];
  multiline?: boolean;
  onSave: (value: string | number) => void;
}

export function EditabeCell({
  type,
  value,
  options,
  multiline,
  onSave,
}: EditabeCellProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const handleSave = () => {
    if (!draft) return;
    onSave(draft);
    setEditing(false);
  };

  const renderInput = () => {
    if (type === "select") {
      return (
        <Select
          value={String(draft)}
          onValueChange={(v) => {
            onSave(v);
            setEditing(false);
          }}
        >
          <SelectTrigger className="h-8 w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options?.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    if (type === "text" && multiline) {
      return (
        <Textarea
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={handleSave}
        />
      );
    }

    return (
      <Input
        autoFocus
        type={type} // "text" or "number"
        value={draft}
        onChange={(e) =>
          setDraft(type === "number" ? Number(e.target.value) : e.target.value)
        }
        onBlur={handleSave}
        onKeyDown={(e) => e.key === "Enter" && handleSave()}
        className="h-8 w-32"
      />
    );
  };

  if (editing) return renderInput();
}
