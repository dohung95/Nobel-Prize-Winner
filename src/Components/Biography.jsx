import NavBar from './Navbar'
import Footer from './Footer'
import "../Css/Van/Biography.css"

import { Container, ListGroup } from 'react-bootstrap';
import hinh_card from '../Img/Van/Nobel1903.jpg'
const Biography = () => {
    const alertClicked = () => {

        alert('Corret answer!');
    }
    return (
        <>
            <div >
                <NavBar />
            </div>
            <div className='background_bio' >

                <div style={{ padding: '30px' }}>
                    <Container className='khoibio_Van_bio ' style={{ padding: "30px" }}>
                        <div>
                            <div className='quote' style={{ color: '#f479a3', background: '#b8cddb', padding: '5px 20px' }}>
                                <blockquote className="custom-quote">
                                    <div>The quote "In science, what matters is what is discovered, not the researcher themselves".</div>
                                    <footer style={{ color: 'black' }}>— Marie Curie</footer>
                                </blockquote>
                            </div>

                            <div className="container1" >
                                <div className="row " style={{ padding: '30px' }}>
                                    <div className="col-md-8 " >
                                        <div style={{ textAlign: "justify", fontSize: "1.5rem" }} className='chuhoa'>
                                            <p > Marie Curie, from a burning passion for science to the first woman who won two Nobell prizes. Until now, women who do scientific research are few, the women have achieved great success in this industry. And Marie Curie is one of the few. Marie Curie is a physicist, Balan -original French chemist. She was a woman who impressed the world with discoveries that opened up new foundations in physics and chemistry, and also opened the door for advances in techniques, biology and medicine. learn. She was also the one who created a new platform for women in the field of science by becoming the first woman to receive a PhD scientist in France, the first woman to present in Solvbon and especially her. Also the first and only woman to achieve two Nobel prizes in two different areas: Physics and Chemistry.</p>
                                            <hr align='center' />
                                            <div >Who is this first many women ???</div>
                                        </div>




                                        <div className='link' style={{}}>

                                            <div align='center'>
                                                <div >


                                                </div>
                                                <div style={{ padding: '0px 45px 0px 0px' }}>

                                                    <ul>
                                                        <ListGroup defaultActiveKey="#link1">
                                                            <ListGroup.Item action href="#link1">
                                                                We can play mini game now!
                                                            </ListGroup.Item>
                                                            <ListGroup.Item action onClick={alertClicked}>
                                                                Information
                                                            </ListGroup.Item>
                                                            <ListGroup.Item action onClick={alertClicked}>
                                                                Education
                                                            </ListGroup.Item>
                                                            <ListGroup.Item action onClick={alertClicked}>
                                                                Carrer
                                                            </ListGroup.Item>
                                                            <ListGroup.Item action onClick={alertClicked}>
                                                                Life story
                                                            </ListGroup.Item>
                                                            <ListGroup.Item action onClick={alertClicked}>
                                                                Intimate detail
                                                            </ListGroup.Item>

                                                        </ListGroup>


                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-md-4" style={{ padding: '0% 3%' }}>
                                        <div className='card ' >

                                            <figure style={{ textAlign: "center" }}>
                                                <div className='myEffect'>
                                                    <img src={hinh_card} style={{ width: "100%" }} />
                                                </div>
                                                <figcaption style={{ textAlign: "center", marginTop: "10px" }}>Marie Curie (1920)</figcaption>
                                            </figure>

                                            <table>
                                                <tr>
                                                    <th>Birth_name:</th>
                                                    <td>Maria Salomea Skłodowska</td>

                                                </tr>
                                                <tr>
                                                    <th>Birth_date:</th>
                                                    <td>7 November 1867</td>
                                                </tr>
                                                <tr>
                                                    <th>Birth_place:</th>
                                                    <td> Warsaw, Congress Poland, Russian Empire(now Poland)</td>
                                                </tr>
                                                <tr>
                                                    <th>Death_date:</th>
                                                    <td>4 July 1934 (aged 66)</td>
                                                </tr>
                                                <tr>
                                                    <th>Death_cause:</th>
                                                    <td> Aplastic anemia</td>
                                                </tr>
                                                <tr>
                                                    <th>Death_place:</th>
                                                    <td>Passy (Haute-Savoie)</td>
                                                </tr>
                                                <tr>
                                                    <th>Citizenship:</th>
                                                    <td>France (1895-1934)</td>
                                                </tr>


                                            </table>
                                            <ListGroup>
                                                <ListGroup.Item variant="info">MORE</ListGroup.Item>
                                                {/* <p><button>MORE</button></p> */}
                                            </ListGroup>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="chiakhoi" style={{ background: '#fffadf', border: 'solid 0px #baba99', padding: '50px', margin: '30px 0px' }}>

                                + Marie Curie whose real name is Marya Sklodowska, born on November 7, 1867, in Warsaw, Balan, the youngest child in the family has 5 children. Her parents are a teacher. Her mother, Bronislawa Sktodowska, is the principal of a boarding school reputation for women. Her father, Wladyslaw Sklodowski, teaches physics and mathematics about her balan heritage. As a result of patriotism, Russian supervisors forced him to be in a lower salary. He also lost his savings because of a bad investment. To raise 5 children, they have to accept boarding students. This will cause death. Maria's eldest siblings, her sister Zofia, suffered from a fever from one of the people who stayed in and died. A few years later, when Maria was 10, her mother died of tuberculosis. The tragedies have led Maria to abandon the Catholicism- the faith of her mother- and become you in the impossible theory. Her father will not forgive himself for losing his family's savings. However, his children will remember him as a man who nurtured them in terms of emotion and intelligence. However, Marie Curie did not give up but continued to find ways to continue the higher education path.
                                <br />


                                + Marie always holds the top position in schools in the years of school when she was ten years old, Maria started attending J. Sikorska boarding school; After that, she attended a high school for girls, where she graduated on June 12, 1883 with the gold medal. Warsaw, the school is only for male students. The Russian Empire prohibits women from attending college. She and her sister Bronisława participated in secret flight college, a Polish patriotic higher education organization to receive female students.
                                <br />


                                + Maria agreed with her sister, Bronisława, that she would financially support Bronisława during medical time in Paris, in exchange for the same support two years later. Regarding this, Maria received a first place, a tutor at Warsaw, then a tutor for two years in Szczuki with a family of Dien Trang, the family żorawskis, her father's relatives. While working for her family later, she loved their son, Kazimierz żorawski, a prominent mathematician in the future. His parents protested the idea he married a poor relative, and Kazimierz could not object to them. Mary's loss of relationship with żorawski is a tragedy for both. He soon got a doctorate and pursued an academic career as a mathematician, becoming a professor and principal of Kraków University. However, as an old man and a mathematical professor at Warsaw University of Technology, he still sat down in front of the Maria Skłodowska statue built in 1935 before the Radium Institute, where she was founded in the year. 1932.
                                <br />

                                + While working as a tutor, she continued to self-study and research whenever she had time.
                                <br />

                                + 1891, when Maria was 24 years old, she was finally able to move with her sister to Paris and now used the name Marie. She enrolled at the University of Paris—called the Sorbonne—where she studied physics and mathematics, starting her path into scientific research.
                                <br />

                                + Shortly after arriving in Paris, thanks to her extraordinary efforts, Marie quickly became one of the most outstanding students at the Sorbonne University. While still a third-year student, she was awarded a master's degree in physics. And in her fourth year, she was awarded a master's degree in arithmetic. In addition, Marie also spoke and wrote in languages ​​such as French, Russian, English, German and was determined to do a doctoral thesis in Physics.
                                <br />

                                + She studied the magnetic properties of alloys and wrote the first scientific project here.

                            </div>

                            <div className="container" style={{ backgroundColor: '#f3f0e0', border: 'solid 1px #baba99', padding: '20px' }}>
                                <h3 >Cuộc sống Paris:</h3>
                                <p>+In late 1891, she left Poland for France. In Paris, Maria briefly found shelter with her sister and brother-in-law before renting a garret closer to the university, in the Latin Quarter, and proceeding with her studies of physics, chemistry, and mathematics at the University of Paris, where she enrolled in late 1891.She subsisted on her meagre resources, keeping herself warm during cold winters by wearing all the clothes she had. She focused so hard on her studies that she sometimes forgot to eat. Skłodowska studied during the day and tutored evenings, barely earning her keep. In 1893, she was awarded a degree in physics and began work in an industrial laboratory of Gabriel Lippmann. Meanwhile, she continued studying at the University of Paris and with the aid of a fellowship she was able to earn a second degree in 1894.</p>
                                <p> +Skłodowska had begun her scientific career in Paris with an investigation of the magnetic properties of various steels, commissioned by the Society for the Encouragement of National Industry. That same year, Pierre Curie entered her life: it was their mutual interest in natural sciences that drew them together. Pierre Curie was an instructor at The City of Paris Industrial Physics and Chemistry Higher Educational Institution (ESPCI Paris). They were introduced by Polish physicist Józef Wierusz-Kowalski, who had learned that she was looking for a larger laboratory space, something that Wierusz-Kowalski thought Pierre could access. Though Curie did not have a large laboratory, he was able to find some space for Skłodowska where she was able to begin work.</p>
                                <p> +Their mutual passion for science brought them increasingly closer, and they began to develop feelings for one another. Eventually, Pierre proposed marriage, but at first Skłodowska did not accept as she was still planning to go back to her native country. Curie, however, declared that he was ready to move with her to Poland, even if it meant being reduced to teaching French. Meanwhile, for the 1894 summer break, Skłodowska returned to Warsaw, where she visited her family. She was still labouring under the illusion that she would be able to work in her chosen field in Poland, but she was denied a place at Kraków University because of sexism in academia. A letter from Pierre convinced her to return to Paris to pursue a PhD. At Skłodowska's insistence, Curie had written up his research on magnetism and received his own doctorate in March 1895; he was also promoted to professor at the School. A contemporary quip would call Skłodowska "Pierre's biggest discovery".</p>
                                <p> +On 26 July 1895, they were married in Sceaux, neither wanted a religious service. Curie's dark blue outfit, worn instead of a bridal gown, would serve her for many years as a laboratory outfit. They shared two pastimes: long bicycle trips and journeys abroad, which brought them even closer. In Pierre, Marie had found a new love, a partner, and a scientific collaborator on whom she could depend.</p>
                            </div>

                            <div className='container' style={{ backgroundColor: '#f3f0e0', border: 'solid 1px #baba99' }}>
                                <h3>những năm sau đó:</h3>
                                <h6></h6>
                                <p>
                                    +On 19 April 1906, Pierre Curie was killed in a road accident. Walking across the Rue Dauphine in heavy rain, he was struck by a horse-drawn vehicle and fell under its wheels, fracturing his skull and killing him instantly. Curie was devastated by her husband's death. On 13 May 1906 the physics department of the University of Paris decided to retain the chair that had been created for her late husband and offer it to Marie. She accepted it, hoping to create a world-class laboratory as a tribute to her husband Pierre. She was the first woman to become a professor at the University of Paris.
                                </p>
                                <p>
                                    +Curie's quest to create a new laboratory did not end with the University of Paris, however. In her later years, she headed the Radium Institute (Institut du radium, now Curie Institute, Institut Curie), a radioactivity laboratory created for her by the Pasteur Institute and the University of Paris. The initiative for creating the Radium Institute had come in 1909 from Pierre Paul Émile Roux, director of the Pasteur Institute, who had been disappointed that the University of Paris was not giving Curie a proper laboratory and had suggested that she move to the Pasteur Institute. Only then, with the threat of Curie leaving, did the University of Paris relent, and eventually the Curie Pavilion became a joint initiative of the University of Paris and the Pasteur Institute.
                                </p>
                                <p>
                                    +In 1910 Curie succeeded in isolating radium; she also defined an international standard for radioactive emissions that was eventually named for her and Pierre: the curie. Nevertheless, in 1911 the French Academy of Sciences failed, by one or two votes, to elect her to membership in the academy. Elected instead was Édouard Branly, an inventor who had helped Guglielmo Marconi develop the wireless telegraph. It was only over half a century later, in 1962, that a doctoral student of Curie's, Marguerite Perey, became the first woman elected to membership in the academy.
                                </p>
                                <p>
                                    +Despite Curie's fame as a scientist working for France, the public's attitude tended toward xenophobia—the same that had led to the Dreyfus affair—which also fuelled false speculation that Curie was Jewish. During the French Academy of Sciences elections, she was vilified by the right-wing press as a foreigner and atheist. Her daughter later remarked on the French press's hypocrisy in portraying Curie as an unworthy foreigner when she was nominated for a French honour, but portraying her as a French heroine when she received foreign honours such as her Nobel Prizes.
                                </p>
                                <p>
                                    +In 1911 it was revealed that Curie was involved in a year-long affair with physicist Paul Langevin, a former student of Pierre Curie's, a married man who was estranged from his wife.This resulted in a press scandal that was exploited by her academic opponents. Curie (then in her mid-40s) was five years older than Langevin and was misrepresented in the tabloids as a foreign Jewish home-wrecker. When the scandal broke, she was away at a conference in Belgium; on her return, she found an angry mob in front of her house and had to seek refuge, with her daughters, in the home of her friend, Camille Marbo. International recognition for her work had been growing to new heights, and the Royal Swedish Academy of Sciences, overcoming opposition prompted by the Langevin scandal, honoured her a second time, with the 1911 Nobel Prize in Chemistry.This award was "in recognition of her services to the advancement of chemistry by the discovery of the elements radium and polonium, by the isolation of radium and the study of the nature and compounds of this remarkable element."Because of the negative publicity due to her affair with Langevin, the chair of the Nobel committee, Svante Arrhenius, attempted to prevent her attendance at the official ceremony for her Nobel Prize in Chemistry, citing her questionable moral standing. Curie replied that she would be present at the ceremony, because "the prize has been given to her for her discovery of polonium and radium" and that "there is no relation between her scientific work and the facts of her private life".
                                </p>
                                <p>
                                    +She was the first person to win or share two Nobel Prizes, and remains alone with Linus Pauling as Nobel laureates in two fields each. A delegation of celebrated Polish men of learning, headed by novelist Henryk Sienkiewicz, encouraged her to return to Poland and continue her research in her native country. Curie's second Nobel Prize enabled her to persuade the French government to support the Radium Institute, built in 1914, where research was conducted in chemistry, physics, and medicine. A month after accepting her 1911 Nobel Prize, she was hospitalised with depression and a kidney ailment. For most of 1912, she avoided public life but did spend time in England with her friend and fellow physicist, Hertha Ayrton. She returned to her laboratory only in December, after a break of about 14 months.
                                </p>
                                <p>
                                    +In 1912 the Warsaw Scientific Society offered her the directorship of a new laboratory in Warsaw but she declined, focusing on the developing Radium Institute to be completed in August 1914, and on a new street named Rue Pierre-Curie (today rue Pierre-et-Marie-Curie). She was appointed director of the Curie Laboratory in the Radium Institute of the University of Paris, founded in 1914. She visited Poland in 1913 and was welcomed in Warsaw but the visit was mostly ignored by the Russian authorities. The institute's development was interrupted by the coming war, as most researchers were drafted into the French Army, and it fully resumed its activities in 1919.
                                </p>

                            </div>

                            <div className='container' style={{ backgroundColor: '#f3f0e0', border: 'solid 1px #baba99' }}>
                                <h3>Hành trình sự nghiệp:</h3>
                                <div >
                                    <ListGroup>
                                        <p>
                                            ++Marie Curie devoted her whole life to science, brave and impartial.
                                        </p>
                                        <p>
                                            + For many people today, accessing higher education is often not too difficult. But for Marie, that time was a huge, persistent effort.
                                        </p>
                                        <p>
                                            +In addition to successfully isolating the radioactive substance radium, the Curies also demonstrated its role in inhibiting cancer cells, and with the successful isolation of this substance, In addition to helping to overturn established ideas in physics and chemistry, Curie's work had a profound impact on the social sphere. To achieve her scientific achievements, she had to overcome barriers, both in her homeland and in her adopted country, placed in her path because she was a woman.
                                        </p>
                                        <p>
                                            +During World War I, she researched and purchased X-ray equipment, mobile X-ray cars and auxiliary generators to treat wounded soldiers right on the battlefield. These machines were powered by Radium gas, a colorless radioactive gas emitted by radium, later recognized as radon, to sterilize infected tissue. She became the director of the Red Cross X-ray service and founded the first French Military X-ray Center. You see, all of her inventions were donated to science in general, or to save lives, not used for personal gain. That is what made her a great person honored by the whole world. Her image was honored to be printed on the Polish Zloty and the French franc. To honor her and her husband, scientists took the 96th element in the periodic table, Curium, symbol Cm, to honor her and Pierre.
                                        </p>
                                        <p>
                                            +She was known for her honesty and moderation. After receiving a small scholarship in 1893, she returned it in 1897 as soon as she began earning a living. She gave most of her first Nobel Prize money to friends, family, students, and research associates. In an unusual decision, Curie deliberately chose not to patent her process for isolating radium so that the scientific community could work unhindered. She insisted that monetary gifts and awards be given to scientific organizations with which she was affiliated rather than to herself. She and her husband often refused awards and medals. Albert Einstein is said to have remarked that she was perhaps the only person who could not be bribed by fame.
                                        </p>
                                        <p>
                                            +You may not know that Pitchblende is a complex mineral, and chemical separation of its components is an arduous task. Moreover, the radium contained in the ore is extremely small, accounting for about 1/10g Radi in a new raw ore. So to successfully separate radio radioactive substances, the couple must filter and do countless experiments. Exactly the number of up to thousands of repetitive experiments during 4 years, in difficult conditions, poor labs, do not have enough specialized tools and both have to teach to teach Sword livelihood. They finally successfully separated radi radioactive substances and along with radi research for cancer treatment. Couple received the first Nobel Prize in Physics in 1903.

                                        </p>
                                        <p>
                                            +Also, promptly after the war started, she attempted to donate her gold Nobel Prize medals to the war effort but the French National Bank refused to accept them She did buy war bonds, using her Nobel Prize money. She said:
                                            <blockquote style={{ background: '#baba99' }}>

                                                "I am going to give up the little gold I possess. I shall add to this the scientific medals, which are quite useless to me. There is something else: by sheer laziness I had allowed the money for my second Nobel Prize to remain in Stockholm in Swedish crowns. This is the chief part of what we possess. I should like to bring it back here and invest it in war loans. The state needs it. Only, I have no illusions: this money will probably be lost."

                                            </blockquote>
                                            She was also an active member in committees of Polonia in France dedicated to the Polish cause. After the war, she summarized her wartime experiences in a book, Radiology in War (1919).
                                        </p>
                                    </ListGroup>
                                </div>

                            </div>

                        </div>

                    </Container>
                </div>

            </div>
            <div >
                <Footer />
            </div>
        </>
    );
}

export default Biography;