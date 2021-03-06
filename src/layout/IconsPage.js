import Navbar from '../dashboard/Navbar'
import Sidebar from '../dashboard/Sidebar'
import Footer from '../dashboard/Footer'
import Icons from '../subSidebar/Icons'
const IconsPage = () => {
    return (
        <div className="bg-admin">
        <Navbar />
        <Sidebar />
        <Icons />
        <Footer />
       </div>
    )
}

export default IconsPage
