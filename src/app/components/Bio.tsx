import { bioCopy } from "@/app/copy"

export function Bio() {
    return (
        <>
            <div className="section mt-300 mt-section" id="bio">
                <div className="w-100 pt-custom position-relative">
                    <div className="bullet" style={{ top: "120px" }}></div>
                    <div className="ps-0 ps-lg-5 col-lg-8">
                        <h2 className="text-xlarge text-blue text-bold appear2">{bioCopy.title}</h2>
                        {bioCopy.paragraphs.map((paragraph, index) => (
                            <p key={index} className="appear2 text-thin text-justify" >
                                {paragraph.text}
                            </p>
                        ))}
                    </div>
                    <img className="arts-bio" src="./img/bg-sec-bio.png" alt="Projects" />
                </div>
            </div>
        </>
    )
}