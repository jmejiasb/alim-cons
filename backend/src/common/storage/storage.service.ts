import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class StorageService {
  private client = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
  );

  private readonly signedUrlDuration = Number(
    process.env.SUPABASE_SIGNED_URL_DURATION ?? 60 * 60 * 24,
  );

  async createSignedDownload(path: string) {
    const { data, error } = await this.client.storage
      .from(process.env.SUPABASE_EBOOK_BUCKET!)
      .createSignedUrl(path, this.signedUrlDuration);

    if (error) {
      throw new Error(error.message);
    }

    return data.signedUrl;
  }
}
