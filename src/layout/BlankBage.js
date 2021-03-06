import Navbar from '../dashboard/Navbar'
import Sidebar from '../dashboard/Sidebar'
import Footer from '../dashboard/Footer'
import Blank from '../subSidebar/Blank'
const ProfilePage = () => {
    return (
        <div className="bg-admin">
        <Navbar />
        <Sidebar />
        <Blank />
        <Footer />
       </div>
    )
}

export default ProfilePage
