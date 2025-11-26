import { useEffect, useState } from 'react';
import Banner2 from '../../assets/Banner_2.jpg';
import BannerMOb2 from '../../assets/Banner_2_Responsive.jpg';



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

    const banners = mobile? [BannerMOb2]: [Banner2];


    return (
        <section>
            <div className=" px-2 md:px-8 lg:px-20 mt-5 banner-slider">
                <img src={banners[0]} alt="Banner 1" className="w-full mb-6" />              
            </div>
        </section>
    );
};

export default Banner_Three;
