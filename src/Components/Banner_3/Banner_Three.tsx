import { useEffect, useState } from 'react';
import Banner5 from '../../assets/Banner_5.jpg';
import BannerMOb5 from '../../assets/Banner_5_Responsive.jpg';



const Banner_Three = () => {
    const [mobile, setMobile] = useState(window.innerWidth <= 425);

    useEffect(() => {
        const handleSize = () => {
            setMobile(window.innerWidth <= 425);
        };
        handleSize();
        window.addEventListener('resize', handleSize);
        return () => window.removeEventListener('resize', handleSize);
    }, []);

    const banners = mobile? [BannerMOb5]: [Banner5];


    return (
        <section>
            <div className=" px-2 md:px-8 lg:px-20 mt-5 banner-slider">
                <img src={banners[0]} alt="Banner 1" className="w-full mb-6" />              
            </div>
        </section>
    );
};

export default Banner_Three;
