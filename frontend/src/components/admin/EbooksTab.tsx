"use client"

import { EbookTable } from "./EbooksTable"
import { useState } from "react"

export function EbooksTab() {

  const [ebooks, setEbooks] = useState([])

  return (<EbookTable ebooks={ebooks}/>)
}