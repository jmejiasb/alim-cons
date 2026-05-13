import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  const mockFetch = jest.fn();

  const mockUsdRateResponse = (valor = 950.25) => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        serie: [{ valor }],
      }),
    });
  };

  beforeEach(() => {
    service = new CurrencyService();

    jest.clearAllMocks();

    global.fetch = mockFetch as jest.Mock;
  });

  it('should return the latest USD rate', async () => {
    mockUsdRateResponse()

    const result = await service.getUsdRate();

    expect(result).toBe(950.25);
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://mindicador.cl/api/dolar');
  });

  it('should return cached USD rate without calling fetch again', async () => {
    mockUsdRateResponse()

    const firstResult = await service.getUsdRate();
    const secondResult = await service.getUsdRate();

    expect(firstResult).toBe(950.25);
    expect(secondResult).toBe(950.25);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it('should throw when the API request fails', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      json: async () => ({}),
    });

    await expect(service.getUsdRate()).rejects.toThrow(
      'Could not fetch dolar rate',
    );
  });

  it('should throw when the API response is invalid', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        serie: [],
      }),
    });

    await expect(service.getUsdRate()).rejects.toThrow(
      'Invalid dolar rate response',
    );
  });
});
