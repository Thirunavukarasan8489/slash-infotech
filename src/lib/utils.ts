export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function pageMetadata(title: string, description: string, path = "") {
  const url = `https://slashinfotech.co.uk${path}`;

  return {
    title: `${title} | Slash Infotech`,
    description,
    openGraph: {
      title: `${title} | Slash Infotech`,
      description,
      images: ["/images/og-image.png"],
      url,
      type: "website",
    },
  };
}
