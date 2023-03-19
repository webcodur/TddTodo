import Header from './Header';
import Footer from './Footer';

const Applayout = ({ children }:any) => {
  return ( <>
    <Header/>
    <hr/>
    <main>{children}</main>
    {/* <Footer/> */}
  </> );
}
 
export default Applayout;