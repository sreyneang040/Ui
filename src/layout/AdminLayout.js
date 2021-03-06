import Navbar from '../dashboard/Navbar'
import Sidebar from '../dashboard/Sidebar'
import SaleSummaryAndFeed from '../dashboard/SaleSummaryAndFeed'
import RecentCommentAndTempGuide from '../dashboard/RecentCommentAndTempGuide'
import TopSellingProduct from '../dashboard/TopSellingProduct'
import Breadcrumbs from '../dashboard/Breadcrumbs'
import Footer from '../dashboard/Footer'
const AdminLayout = () => {
    return (
        <div className="bg-admin">
            <Navbar />
            <Breadcrumbs />
            <Sidebar />
            <SaleSummaryAndFeed />
            <TopSellingProduct />
            <RecentCommentAndTempGuide />
            <Footer />

        </div>
    )
}

export default AdminLayout
