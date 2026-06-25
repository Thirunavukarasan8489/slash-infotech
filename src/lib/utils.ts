export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const siteUrl = "https://slash-infotech.vercel.app";

export const ogImage = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "Slash Infotech - UK Software, AI and Cloud Studio",
};

export function pageMetadata(title: string, description: string, path = "") {
  const url = `${siteUrl}${path}`;

  return {
    title: `${title} | Slash Infotech`,
    description,
    openGraph: {
      title: `${title} | Slash Infotech`,
      description,
      images: [ogImage],
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Slash Infotech`,
      description,
      images: [`${siteUrl}/images/og-image.png`],
    },
  };
}

