import { StorageService } from './storage.service';
import { createClient } from '@supabase/supabase-js';

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(),
}));

describe('StorageService', () => {
  let service: StorageService;

  const createSignedUrlMock = jest.fn();
  const fromMock = jest.fn();

  beforeEach(() => {
    process.env.SUPABASE_URL = 'https://supabase.test';
    process.env.SUPABASE_SECRET_KEY = 'secret-key';
    process.env.SUPABASE_EBOOK_BUCKET = 'ebooks';
    process.env.SUPABASE_SIGNED_URL_DURATION = '3600';

    fromMock.mockReturnValue({
      createSignedUrl: createSignedUrlMock,
    });

    (createClient as jest.Mock).mockReturnValue({
      storage: {
        from: fromMock,
      },
    });

    service = new StorageService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createSignedDownload', () => {
    it('should return the signed url when Supabase succeeds', async () => {
      createSignedUrlMock.mockResolvedValue({
        data: { signedUrl: 'https://signed-url.test/file.pdf' },
        error: null,
      });

      const result = await service.createSignedDownload('folder/file.pdf');

      expect(fromMock).toHaveBeenCalledWith('ebooks');
      expect(createSignedUrlMock).toHaveBeenCalledWith('folder/file.pdf', 3600);
      expect(result).toBe('https://signed-url.test/file.pdf');
    });

    it('should throw when Supabase returns an error', async () => {
      createSignedUrlMock.mockResolvedValue({
        data: null,
        error: { message: 'Bucket not found' },
      });

      await expect(
        service.createSignedDownload('folder/file.pdf'),
      ).rejects.toThrow('Bucket not found');

      expect(fromMock).toHaveBeenCalledWith('ebooks');
      expect(createSignedUrlMock).toHaveBeenCalledWith('folder/file.pdf', 3600);
    });

    it('should use the default signed url duration when env var is missing', async () => {
      delete process.env.SUPABASE_SIGNED_URL_DURATION;

      service = new StorageService();

      createSignedUrlMock.mockResolvedValue({
        data: { signedUrl: 'https://signed-url.test/file.pdf' },
        error: null,
      });

      await service.createSignedDownload('folder/file.pdf');

      expect(createSignedUrlMock).toHaveBeenCalledWith(
        'folder/file.pdf',
        60 * 60 * 24,
      );
    });
  });
});