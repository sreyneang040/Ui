import Navbar from '../dashboard/Navbar'
import Sidebar from '../dashboard/Sidebar'
import Footer from '../dashboard/Footer'
import Profile from '../subSidebar/Profile'
import Breadcrumbs from '../dashboard/Breadcrumbs'
const ProfilePage = () => {
    return (
        <div className="bg-admin">
        <Navbar />
        <Breadcrumbs />
        <Sidebar />
        <Profile />
        <Footer />
       </div>
    )
}

export default ProfilePage
