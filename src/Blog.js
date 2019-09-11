import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron';

const Blog = () => (
    <div>
        <Jumbotron>
        <div class="container position-relative">
		        <div class="media flex-column flex-md-row">
			        <div class="media-body align-self-center">
			            <h2 class="page-heading mb-2">Miguel Fernandez's Blog</h2>
			            <div class="page-heading-tagline mb-3">I write about web development and life as a developer. <br />You can follow me via the various channels below:</div>
			        </div>
		        </div>
	        </div>
            </Jumbotron>
    </div>
)

export default Blog