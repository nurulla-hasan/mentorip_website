
import { Navbar } from "@/components/common/Navbar";
import { Sidebar } from "@/components/common/Sidebar";
import { Footer } from "@/components/common/Footer";
import { getAllCategories } from "@/services/category";

export default async function MainRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await getAllCategories();
  const initialCategories = res?.data || [];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar initialCategories={initialCategories} />
      
      <div className="flex-1 flex flex-col">
        <main className="max-w-[1920px] mx-auto w-full px-4 flex-1 mt-4 md:mt-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Desktop only here, Mobile in Navbar Sheet */}
            <div className="hidden lg:block w-65 shrink-0">
              <div className="sticky top-24">
                <Sidebar initialCategories={initialCategories} />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
