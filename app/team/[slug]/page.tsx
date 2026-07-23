import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeamProfile } from "@/components/team/TeamProfile";
import { siteConfig, teamMembers } from "@/lib/constants";
import { ogImage, siteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((item) => item.slug === slug);

  if (!member) {
    return {
      title: "Team Profile",
      description: "Slash Infotech leadership profile.",
    };
  }

  const title = `${member.name} - ${member.role}`;
  const description = member.headline;
  const url = `${siteUrl}/team/${member.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Slash Infotech`,
      description,
      images: [ogImage],
      url,
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Slash Infotech`,
      description,
      images: [`${siteUrl}/images/og-image.png`],
    },
  };
}

export default async function TeamProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = teamMembers.find((item) => item.slug === slug);

  if (!member) notFound();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    email: member.email,
    image: `${siteUrl}${member.image}`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteUrl}/team/${member.slug}`,
  };

  return (
    <>
      <TeamProfile member={member} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
