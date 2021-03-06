import Navbar from '../dashboard/Navbar'
import Sidebar from '../dashboard/Sidebar'
import Footer from '../dashboard/Footer'
import Profile from '../subSidebar/Profile'
const ProfilePage = () => {
    return (
        <div className="bg-admin">
        <Navbar />
        <Sidebar />
        <Profile />
        <Footer />
       </div>
    )
}

export default ProfilePage
