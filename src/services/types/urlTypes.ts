export interface ShortenUrlRequest {
  originalUrl: string;
}
export interface ShortenUrlResponse {
  statusCode: number;
  data: string;
  message: string;
  success: boolean;
}

export interface RedirectToOriginalUrlRequest {
  shortId: string;
}
