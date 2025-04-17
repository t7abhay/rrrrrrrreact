import {
  ShortenUrlRequest,
  ShortenUrlResponse,
  RedirectToOriginalUrlRequest,
} from "./types/urlTypes.js";

import axiosInstance from "../config/axios//axiosInstance.ts";

export async function createShortURL(
  data: ShortenUrlRequest
): Promise<ShortenUrlResponse> {
  const response = await axiosInstance.post<ShortenUrlResponse>(
    "/shorten-url",
    data
  );

  return response.data;
}

export async function redirectToOriginalUrl(
  data: RedirectToOriginalUrlRequest
) {
  const response = await axiosInstance.get(`/${data}`);

  return response.data;
}
