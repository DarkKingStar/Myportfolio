import './footer.css';
import socials from './json/socials.json';
import details from './json/details.json';
function Footer(){
    return(<>
        <div className="footercontainer">
            <div className="mainfooter u-s-n">
                <div>
                    <h1>{details.footerslogan}</h1>
                    <button className='hiremebtnft'><a href='#contact'>Hire me</a></button>
                </div>
                <div>
                    <p className="footerdesc">{details.footerdesc}</p>
                    <span style={{width: "500px", fontSize:"20px",fontWeight:"700"}}>Connect
                        <br/>
                        {socials.map((item, index) => (
                           <i key={index} title={item.name}><a href={item.link} target="_blank"><img src={item.logo} alt={item.name}/></a></i>
                        ))}
                    </span>
                </div>
            </div>
            <div className="endfooter u-s-n">
                <div style={{display:'flex'}}>
                    <span className="logofooter">
                        <b>{details.initial}</b>
                    </span>
                    <h2 style={{margin:"0px 15px 0px 15px"}}>{details.name}</h2>
              </div>
                <div>
                    <h4>{details.name}</h4>
                    <h6>Copyright © 2023</h6>
                </div>
            </div>
        </div>
    </>)
}
export default Footer;