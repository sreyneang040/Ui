import Navbar from '../dashboard/Navbar'
import Sidebar from '../dashboard/Sidebar'
import SaleSummaryAndFeed from '../dashboard/SaleSummaryAndFeed'
import RecentCommentAndTempGuide from '../dashboard/RecentCommentAndTempGuide'
import TopSellingProduct from '../dashboard/TopSellingProduct'
const AdminLayout = () => {
    return (
       <>
        <Navbar />
        <Sidebar />
        <SaleSummaryAndFeed />
        <TopSellingProduct />
        <RecentCommentAndTempGuide />
       </>
    )
}

export default AdminLayout
