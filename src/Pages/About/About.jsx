import img from "../../assets/mini-events.png"
import member01 from "../../assets/member 01.png"
import member02 from "../../assets/member 02.png"
import member03 from "../../assets/member 03.png"

const About = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-center gap-16">
                <img src={img} alt="" />
                <div>
                <h1 className="text-2xl font-bold">WELCOME TO 
                <span className="text-emerald-500">MINI EVENTS</span>
                </h1>
                <p className="mt-6">We provide all you need for a perfect party whatever the size, theme or location. <br />
                    From the importance of delectable catering, perfect venue sourcing or beautiful marquees, <br />
                    fabulous props, creative floral displays, stunning lighting, music and entertainment. <br />
                    <p className="mt-6">
                    With meticulous attention to detail, whatever the size or budget. <br />
                    Providing you and your guests a unique experience in the UK or Overseas. <br />
                    </p>
                   </p>
                </div>
            </div>
            <div>
                <div>
                    <h1  className="flex justify-center items-center text-4xl font-bold mt-12 text-red-500">Our Team</h1>
                </div>
                <div className="flex justify-center items-center gap-6 mt-8">
                    <div>
                        <h1 className="text-xl font-bold pl-16">Lara Quakes</h1>
                        <p className="pl-16">Co-founder</p>
                        <img className="pt-4" src={member01} alt="" />
                        <p className="pt-4">ellentesque habitant morbi tristique  senectus <br /> 
                         et br netus et malesuada fames ac turpis egestas. <br />
                         Nullam vel erat vitae lectus dictum lacinia.</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold pl-16">Lara Quakes</h1>
                        <p className="pl-16">Photographer</p>
                        <img className="pt-4" src={member02} alt="" />
                        <p className="pt-4">ellentesque habitant morbi tristique  senectus <br /> 
                         et br netus et malesuada fames ac turpis egestas. <br />
                         Nullam vel erat vitae lectus dictum lacinia.</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold pl-16">Lara Quakes</h1>
                        <p className="pl-16">Co-founder</p>
                        <img className="pt-4" src={member03} alt="" />
                        <p className="pt-4">ellentesque habitant morbi tristique  senectus <br /> 
                         et br netus et malesuada fames ac turpis egestas. <br />
                         Nullam vel erat vitae lectus dictum lacinia.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;