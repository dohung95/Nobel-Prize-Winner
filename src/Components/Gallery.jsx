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
                            <div align='center' style={{paddingBottom:"2%"}}>
                                <img src={path + img.hinh1} />
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6' style={{paddingBottom:"2%"}}>
                            <div align='center' style={{paddingBottom:"2%"}}>
                                <img src={path + img.hinh2} />
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6' style={{paddingBottom:"2%"}}>
                            <div align='center' style={{paddingBottom:"2%"}}>
                                <img src={path + img.hinh3} />
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6' style={{paddingBottom:"2%"}}>
                            <div align='center' style={{paddingBottom:"2%"}}>
                                <img src={path + img.hinh4} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gallery;