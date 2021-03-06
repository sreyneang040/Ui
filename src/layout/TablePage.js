import Navbar from '../dashboard/Navbar'
import Sidebar from '../dashboard/Sidebar'
import Footer from '../dashboard/Footer'
import Table from '../subSidebar/Table'

const TablePage = () => {
    return (
        <div className="bg-admin">
        
        <Navbar />
        <Sidebar />
        <Table />
        <Footer />
       </div>
    )
}

export default TablePage
