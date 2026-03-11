import { Input } from "../ui/input";

interface CheckoutContactProps {
  name: string;
  email: string;
  setName: (v: string) => void;
  setEmail: (v: string) => void;
}

export function CheckoutContact({
  name,
  email,
  setName,
  setEmail,
}: CheckoutContactProps) {
  const inputClass = "bg-background border-muted focus-visible:ring-primary";
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <h2 className="font-semibold">Datos de contacto</h2>

      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Nombre</label>
        <Input
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Email</label>
        <Input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>
    </div>
  );
}
