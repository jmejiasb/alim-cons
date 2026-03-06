import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Ebook } from "@/types/ebook";
import { Button } from "../ui/button";

export interface EbookTableProps {
  ebooks: Ebook[];
}

export function EbookTable({ ebooks }: EbookTableProps) {
  return (
    <div className="rounded-2xl border shadow-sm">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Cover</TableHead>
            <TableHead>Titulo</TableHead>
            <TableHead>Descripcion</TableHead>
            <TableHead>Precio Regular</TableHead>
            <TableHead>Precio Oferta</TableHead>
            <TableHead className="text-right">Link</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {ebooks.map((ebook) => {
            return (
              <TableRow key={ebook.id}>
                <TableCell>
                  <div className="relative h-14 w-10 overflow-hidden rounded-md">
                    <Image
                      src={ebook.imgUrl}
                      alt={ebook.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TableCell>

                <TableCell className="font-medium">{ebook.title}</TableCell>

                <TableCell className="max-w-xs truncate text-muted-foreground">
                  {ebook.desc ?? "—"}
                </TableCell>

                <TableCell>{ebook.regularPrice}</TableCell>

                <TableCell>{ebook.salesPrice}</TableCell>

                <TableCell className="text-right">
                  <a
                    href={ebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Ver
                  </a>
                  <Button>Editar</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
