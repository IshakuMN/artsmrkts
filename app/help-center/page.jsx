import ContactUs from "../contactUs";
import FeaturedArticles from "./featuredArticles";
import MoreCategories from "../moreCategories";

export default function Page() {
    return (
        <main className="relative">
            <MoreCategories />
            <FeaturedArticles />
            <ContactUs />
        </main>
    );
}
