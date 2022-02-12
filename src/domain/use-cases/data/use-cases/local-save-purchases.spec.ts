class LocalSavePurchases {
  constructor (private readonly cacheStore: CacheStore) {}
}

interface CacheStore {
  
}

class CacheStoreSpy implements CacheStore {
  deleteCallsCount = 0
}

// sut -> system under test (o construtor da classe a ser testada)
describe('LocalSavePurchases', () => {
  test('Should not delete cache on sut.init', () => {
    const cacheStore = new CacheStoreSpy()
    new LocalSavePurchases(cacheStore)
    expect(cacheStore.deleteCallsCount).toBe(0)
  })
})
