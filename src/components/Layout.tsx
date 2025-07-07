import  {Outlet} from 'react-router';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// interface Layoutprops{
//     children: ReactNode;
// }
function Layout(){
    return(
        <>
        <Header/>
        <main><Outlet /></main>
        <Footer/>
        </>
    );
}

export default Layout;