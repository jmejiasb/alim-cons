import { registerEnumType } from '@nestjs/graphql';

export enum PurchaseStatus {
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED',
}

registerEnumType(PurchaseStatus, {
  name: 'PurchaseStatus',
});
