import '../Css/Van/Gallery.css'
import Data from '../Data/Van/Gallery.json'
const Gallery = () => {
    const path = process.env.PUBLIC_URL
    return (
        <>
            <div className='gallery'>
                {Data.map((img) => (
                    <div className='row' key={img.id}>
                        <div className='col-md-3 col-sm-6' style={{paddingBottom:"2%"}}>
                            <div align='center' className='borderImg'>
                                <img src={path + img.hinh1} />
                               <div><i>{img.cap1}</i></div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6' style={{paddingBottom:"2%"}}>
                            <div align='center' className='borderImg'>
                                <img src={path + img.hinh2} />
                                <div><i>{img.cap2}</i></div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6' style={{paddingBottom:"2%"}}>
                            <div align='center' className='borderImg'>
                                <img src={path + img.hinh3} />
                                <div><i>{img.cap3}</i></div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6' style={{paddingBottom:"2%"}}>
                            <div align='center' className='borderImg'>
                                <img src={path + img.hinh4} />
                                <div><i>{img.cap4}</i></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gallery;