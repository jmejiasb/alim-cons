export interface PurchaseItemInput {
  ebookId: string
}

export interface CreatePurchaseInput {
  name: string
  email: string
  items: PurchaseItemInput[]
  paymentProof?: string
  notes?: string
}

export interface Purchase {
  id: string
  name: string
  email: string
  status: PurchaseStatus
}

export enum PurchaseStatus {
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
}