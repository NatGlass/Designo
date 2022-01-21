import * as React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'

const InfoContainer = ({children}: {children: React.ReactNode}) => (
    <div className="relative flex flex-col w-full h-[714px] mx-auto md:mb-[120px] md:last:mb-0 lg:flex-row-reverse lg:even:flex-row lg:h-[326px] ">
        {children}
    </div>
);

const InfoBlock = ({children}: {children: React.ReactNode}) => (
    <div className="w-full h-[394px] bg-[#FDF3F0] mx-auto md:w-[90%] md:mt-[30px] md:rounded-[15px] lg:h-[326px] lg:mt-0">
        {children}
    </div>
)

const commonsMap = "w-full h-[320px] mx-auto md:w-[90%] md:rounded-[15px] lg:w-[350px] lg:h-[326px] z-10"

const CanadaMap = () => {
    return (
        <MapContainer center={[43.644086169253356, -79.3945340361226]} zoom={15} scrollWheelZoom={false} className={`${commonsMap} lg:ml-[30px]`}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

const AustraliaMap = () => {
    return (
        <MapContainer center={[-30.329282726075565, 149.78820771154406]} zoom={15} scrollWheelZoom={false} className={`${commonsMap} lg:mr-[30px]`}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

const UkMap = () => {
    return (
        <MapContainer center={[51.73286827217353, -3.8620286711676086]} zoom={15} scrollWheelZoom={false} className={`${commonsMap} lg:ml-[30px]`}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

const Locations:React.FC = () => (
    <>
        <InfoContainer>
            <CanadaMap />
            <InfoBlock>
                <div className="px-[24px] py-[80px] md:pl-[75px] md:py-[88px] ">
                    <h2 className="text-peach text-[32px] text-center md:text-[40px] md:text-left">Canada</h2>
                    <div className="md:flex">
                        <div className="text-center mt-[24px] md:mr-[80px]">
                            <p className="leading-[25px] md:text-left"><span className="font-bold">Designo Central Office</span> <br />
                                3886 Wellington Street <br />
                                Toronto, Ontario M9C 3J5</p>
                        </div>
                        <div className="text-center mt-[24px]">
                            <p className="leading-[25px] md:text-left"><span className="font-bold">Contact</span> <br />
                                P : +1 253-863-8967 <br />
                                M : contact@designo.co</p>
                        </div>
                    </div>
                </div>
            </InfoBlock>
        </InfoContainer>

        <InfoContainer>
            <AustraliaMap />
            <InfoBlock>
                <div className="px-[24px] py-[80px] md:pl-[75px] md:py-[88px] ">
                    <h2 className="text-peach text-[32px] text-center md:text-[40px] md:text-left">Australia</h2>
                    <div className="md:flex">
                        <div className="text-center mt-[24px] md:mr-[80px]">
                            <p className="leading-[25px] md:text-left"><span className="font-bold">Designo AU Office</span> <br />
                                19 Balonne Street <br />
                                New South Wales 2443</p>
                        </div>
                        <div className="text-center mt-[24px]">
                            <p className="leading-[25px] md:text-left"><span className="font-bold">Contact</span> <br />
                                P : (02) 6720 9092 <br />
                                M : contact@designo.au</p>
                        </div>
                    </div>
                </div>
            </InfoBlock>
        </InfoContainer>

        <InfoContainer>
            <UkMap />
            <InfoBlock>
                <div className="px-[24px] py-[80px] md:pl-[75px] md:py-[88px] ">
                    <h2 className="text-peach text-[32px] text-center md:text-[40px] md:text-left">United Kingdom</h2>
                    <div className="md:flex">
                        <div className="text-center mt-[24px] md:mr-[80px]">
                            <p className="leading-[25px] md:text-left"><span className="font-bold">Designo UK Office</span> <br />
                                13  Colorado Way <br />
                                Rhyd-y-fro, SA8 9GA</p>
                        </div>
                        <div className="text-center mt-[24px]">
                            <p className="leading-[25px] md:text-left"><span className="font-bold">Contact</span> <br />
                                P : 078 3115 1400 <br />
                                M : contact@designo.uk</p>
                        </div>
                    </div>
                </div>
            </InfoBlock>
        </InfoContainer>
    </>
);

export default Locations;
