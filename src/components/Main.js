export function Main() {
    return (
        <div className="main">
            <div className="container mt-4" id="home">
                <ul className="nav bg-black rounded-5 justify-content-center mb-5 fw-bolder fs-3 w-100">
                    <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
                    <li className="nav-item"><a className="nav-link" href="#language">Languages</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
            <section id="resume" class="about-mf sect-pt4 route">
                <div class="container">
                    <div class="row shadow rounded-4">
                        <div class="col-sm-12">
                            <div class="box-shadow-full">
                                <div class="row mt-5">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-6 text-center">
                                                <div class="about-info mt-5">
                                                    <p><span class="title-s">Name: </span> <span>Aadhya Enllawar</span></p>
                                                    <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                                                    <p><span class="title-s">Git: </span> <span>https://github.com/aadhya-enllawar</span></p>
                                                </div>
                                            </div>
                                            <div class="col-6 p-4">
                                                <div class="about-me pt-4 pt-md-0">
                                                    <div class="title-box-2">
                                                        <h5 class="title-left">
                                                            About Me
                                                        </h5>
                                                    </div>
                                                    <p class="para">
                                                        I am a dedicated and aspiring web developer currently pursuing my degree in BTech at VIT-AP. My focus lies in web development, where I've been actively building my skills in ReactJS and MERN full-stack development. In addition to my coursework, I have independently explored programming languages such as Java and Python, gaining a strong foundation in coding principles. As I continue my educational journey, I am eager to expand my knowledge and apply my developing skill set to real-world projects. My passion for web development fuels my commitment to constant learning and improvement, ensuring that I am well-prepared to thrive in this dynamic field upon graduation.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="pb-5"></div>
            <div className="display-6 fw-bold text-center m-4" id="language">
                Languages
            </div>
            <div class="row">
                <div className="container p-5 mx-4 text-center">
                    <div className="row row-cols-2">
                        <div className="col"><div className="p-4 h-100 fw-bold">Python</div></div>
                        <div className="col"><div className="p-4 h-100 fw-bold">Java</div></div>
                        <div className="col"><div className="p-4 h-100 fw-bold">HTML, CSS</div></div>
                        <div className="col"><div className="p-4 h-100 fw-bold">Jacascript</div></div>
                        <div className="col"><div className="p-4 h-100 fw-bold">ReactJS</div></div>
                        <div className="col"><div className="p-4 h-100 fw-bold">MongoDB</div></div>
                    </div>
                </div>
            </div>
            <section>
            <div class="container">
                <div id="contact">
                    <h1 class="text-center p-5">Contact:</h1>
                    <form>
                        <div>
                            <label for="name" class="form-label my-3">Full Name</label>
                            <input type="text" name="name" id="name" class="form-control" />
                        </div>
                        <div>
                            <label for="email" class="form-label my-3">Email:</label>
                            <input type="email" name="email" id="email" class="form-control" />
                        </div>
                        <div>
                            <label for="phno" class="form-label my-3">Phone:</label>
                            <input type="tel" name="phno" id="phno" class="form-control" />
                        </div>
                        <div>
                            <label for="message" class="form-label my-3">Message:</label>
                            <textarea class="form-control" rows="5"></textarea>
                        </div>
                        <div class="text-center my-5">
                            <input type="submit" class="btn btn-primary w-50"/>
                        </div>
                    </form>
                </div>
            </div>
            </section>
            <div class="bg-black text-light text-center p-5 fs-3 mt-5">
                Thank you
            </div>
        </div >
    )
}