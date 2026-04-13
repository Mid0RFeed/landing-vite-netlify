import { SiteLayout } from "@/components/layout/SiteLayout";
import { HomePage } from "@/pages/HomePage";
import { ResumePage } from "@/pages/ResumePage";
import { RouterProvider, useRouter } from "@/router";

function AppRoutes() {
  const { path } = useRouter();

  return (
    <SiteLayout>
      {path === "/resume" ? <ResumePage /> : <HomePage />}
    </SiteLayout>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}
