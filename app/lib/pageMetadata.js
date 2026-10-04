const SITE_URL = "https://furkid.me";
const OG_IMAGE = "/og-image.jpg";

export function createPageMetadata({ title, description, path, index = true }) {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index, follow: index },
    openGraph: {
      title,
      description,
      url,
      siteName: "FURKID.ME",
      locale: "zh_TW",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "FURKID.ME｜和毛孩一起，把生活過好。Better Life, Together.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
