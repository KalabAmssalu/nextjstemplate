import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// Define the type for the metadata function's parameter
type MetadataParams = {
	params: {
		locale: string;
	};
};

export async function generateMetadata({ params: { locale } }: MetadataParams) {
	const t = await getTranslations({ locale, namespace: "HomePage" });

	return {
		title: t("title"),
	};
}

export default function HomePage() {
	const t = useTranslations("HomePage");
	return <h1>{t("title")}</h1>;
}
