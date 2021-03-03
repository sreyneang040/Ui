  import Navbar from '../components/Navbar'
  import GetStarted from '../components/GetStarted'
  import FirstCard from '../components/FirstCard'
  import ProvideFeature from '../components/ProvideFeature'
  import ChooseYourPlan from '../components/ChooseYourPlan'
  import NetworkOfVPN from '../components/NetworkOfVPN'
  import SubscribeNow from '../components/SubscribeNow'
  import Footers from '../components/Footer'
const ClientLayout = () => {
    return (
        <>
       <Navbar />
       <GetStarted />
       <FirstCard />
       <ProvideFeature />
       <ChooseYourPlan />
       <NetworkOfVPN />
       <SubscribeNow />
       <Footers/>
       </>

    )
}

export default ClientLayout;
