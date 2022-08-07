const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

jest.mock('../product_client.js');

describe('ProductService Test', () => {
  let productService;

  const fetchItems = jest.fn(async () => [
    {
      item: 'Milk',
      available: true,
    },
    {
      item: 'Banana',
      available: false,
    },
  ]);

  ProductClient.mockImplementation(() => ({ fetchItems }));

  beforeEach(() => {
    productService = new ProductService();
    // if clearMock is false in jest.config
    // fetchItems.mockClear();
    // ProductClient.mockClear();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([
      {
        item: 'Milk',
        available: true,
      },
    ]);
    expect(items.length).toBe(1);
  });
});
