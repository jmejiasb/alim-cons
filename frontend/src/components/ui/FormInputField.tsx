import { Control, FieldValues, Path } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "./form";
import { Input } from "./input";

interface FormInputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
}

export function FormInputField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormInputFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-medium text-foreground">
            {label}
          </FormLabel>

          <FormControl>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}