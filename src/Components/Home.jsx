import '../Css/Dat/home.css';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Home = () => {
    const images = [
        '/img/Dat/slide_img/marie-curie-01.jpg',
        '/img/Dat/slide_img/marie-curie-02.jpg',
        '/img/Dat/slide_img/marie-curie-03.jpg',
        '/img/Dat/slide_img/marie-curie-04.jpg',
        '/img/Dat/slide_img/marie-curie-05.jpg',
        '/img/Dat/slide_img/marie-curie-06.jpg',
        '/img/Dat/slide_img/marie-curie-07.jpg',
      ];

      const path = process.env.PUBLIC_URL;
    return (
        <>
            <div className="home-content-dat" style={{display: 'block'}}> 
                <div className="row home-content-dat-about" style={{paddingRight: '0', paddingLeft: '0', margin:"3%"}}>
                    
                    <p >Brief Summary Of Marie Curie</p>
                    
                    <div className="col-md-4 slide-container" style={{paddingRight: '0', paddingLeft: '0'}} align='center'>
                        <Zoom scale={0.4}>
                        {
                            images.map((each, index) => <img key={index} src={path+each} />)
                        }
                        </Zoom>
                    </div>
                    <div className="col-md-8 .dat-content-about" style={{paddingRight: '0', display: 'inline-block'}}>
                        <p className='content'>
                        Marie Curie was a French-Polish physicist and chemist, famous worldwide for her work in the study of radioactive substances.
                        She is the first and only woman in the world to receive the Nobel Prize twice in two different fields,
                        and is revered as the best female scientist in the world.
                        </p>
                    </div>
                </div>

                <hr width="50%" style={{marginLeft: '10%'}} />

                <div align='center'style={{margin: '30px'}}>
                    <h1>SEE MORE ABOUT NOBEL PRIZE</h1>
                </div>

                <div className="home-content-dat-nobel">
                    <h2>WHAT IS THE NOBEL?</h2>
                    <p style={{marginLeft: '30px'}}>
                        NOBEL is a system of awards given to individuals and organizations with great achievements serving the interests of humanity,
                        according to the will of famous scientist Alfred Nobel.
                    </p>
                    <h2>Nobel - prestigious award</h2>
                    <p style={{marginLeft: '30px'}}>
                        The Nobel Prize is an international award that has been given annually since 1901 to honor individuals who have achieved in the fields of Physics, Chemistry, Medicine, Literature and Peace; 
                        the Nobel Peace Prize can be awarded to an individual or an organization.
                        <br />
                        <br />
                        In 1968, the Bank of Sweden added to the award system a prize in the field of Economics to commemorate the scientist Alfred Nobel, who founded the Nobel Prize.
                        <br />
                        <br />
                        Alfred Nobel was a great scientist and inventor, the owner of 355 patents, the most notable of which was the invention of dynamite. 
                        Dedicating his whole life to science, Alfred Nobel reached the pinnacle of glory and wealth.
                        <br />
                        <br />
                        After his death in 1896, Alfred Nobel left a surprising and confusing will in which he left only a small portion of his fortune to his friends and relatives “to prevent the creation of lazy people”.
                        <br />
                        <br />
                        Almost all of his assets were sold for cash, equivalent to 70 million Swedish krona at that time, and deposited in a bank.
                        <br />
                        <br />
                        The annual interest will be divided into 5 prizes awarded “to those who have made the greatest contribution to mankind” in the fields of 
                        Physics, Chemistry, Biology (or Medicine), Literature, and Peace.
                        <br />
                        <br />
                        Among the Nobel Prizes, the Physics, Chemistry, Literature, and Economics Prizes are decided by the Royal Swedish Academy of Sciences; 
                        the Physiology or Medicine Prize is decided by the Nobel Committee of the Karolinska Institute; and the Peace Prize is decided by the Nobel Committee of the Norwegian Parliament.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;