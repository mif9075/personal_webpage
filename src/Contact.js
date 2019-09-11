import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Contact = () => (
    <div>
        <Jumbotron>
        
	        <div class="container">
		        <h2 class="page-heading mb-0">Contact</h2>
	        </div>
       
        </Jumbotron>

        <section class="section py-5">
        <div class="container">
            <div class="row">
		        <div class="contact-intro col-lg-8 mx-lg-auto mb-5 text-center">
			        
			        <img class="profile-small d-inline-block mx-auto rounded-circle mb-3" src="adrian.jpg" height="80" width="80" alt=""></img>
			        
			        <div class="speech-bubble bg-white p-4 p-lg-5 shadow-sm">
				        <p class="text-left mb-3">I'm currently taking on freelance work. If you are interested in hiring me for your project please use the form below to get in touch. Want to know how I work and what I can offer? Check out my <a href="projects.html">project case studies</a> and <a href="resume.html">resume</a>.</p>
				        <h6 class="font-weight-bold text-center mb-3">You can also find me on the following channels</h6>
				        
				        
			        </div>
			        
		        </div>
		        <form id="contact-form" class="contact-form col-lg-8 mx-lg-auto" method="post" action="mailto:donmiguel9715@gmail.com?subject=subject&message=message" novalidate="novalidate">
			        <h3 class="text-center mb-3">Get In Touch</h3>
			        <div class="form-row">                                                           
		                <div class="form-group col-md-6">
		                    <label class="sr-only" for="cname">Name</label>
		                    <input type="text" class="form-control" id="cname" name="name" placeholder="Name" minlength="2" required="" aria-required="true">
                                </input>
		                </div>                    
		                <div class="form-group col-md-6">
		                    <label class="sr-only" for="cemail">Email</label>
		                    <input type="email" class="form-control" id="cemail" name="email" placeholder="Email" required="" aria-required="true">
                                </input>
		                </div>
		                <div class="form-group col-12">
		                    <label class="sr-only" for="cmessage">Your message</label>
		                    <textarea class="form-control" id="cmessage" name="message" placeholder="Enter your message" rows="10" required="" aria-required="true"></textarea>
		                </div>
		                 <div class="form-group col-12">
		                    <button type="submit" class="btn btn-block btn-primary py-2">Send It</button>
		                </div>                           
		            </div>
		        </form>
		        
            </div>
        </div>
    </section>

    </div>
)

export default Contact