namespace SavePurchasesNamespace {
  export type PurchaseModel = {
    id: string
    date: Date
    value: Number
  }
}

export interface SavePurchases {
  save: (purchases: Array<SavePurchasesNamespace.PurchaseModel>) => Promise<void>
}
