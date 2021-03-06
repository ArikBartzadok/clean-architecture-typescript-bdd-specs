import { CacheStore } from '@/data/protocols/cache'
import { SavePurchasesNamespace, SavePurchases } from '@/domain'

export class LocalSavePurchases implements SavePurchases {
  constructor (private readonly cacheStore: CacheStore) {}

  async save (purchases: Array<SavePurchasesNamespace.PurchaseModel>): Promise<void> {
    this.cacheStore.delete('purchases')
    this.cacheStore.insert('purchases', purchases)
  }
}
