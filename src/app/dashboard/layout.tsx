
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <section className="grid_wrapper">
      <Sidebar/>
      {children}
    </section>
   
  )
}