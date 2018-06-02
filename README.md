# Dev Portfolio

This repo contains an personal portfolio that was created from template (https://github.com/RyanFitzgerald/devportfolio). It is lightweight and fully responsive, as well as comes with the Bootstrap grid system and loaded with Font Awesome. The site is static. The site was built as modular as possible to make it easy to shift around styles and content.

## Features

* Fully responsive
* Comes with Bootstrap grid system

## Contents

- [Structure]
    - [General](#general)
    - [Header Section](#header-section)
    - [Lead Section](#lead-section)
    - [About Section](#about-section)
    - [Experience Section](#experience-section)
    - [Education Section](#education-section)
    - [Projects Section](#projects-section)
    - [Skills Section](#skills-section)
    - [Contact Section](#contact-section)
    - [Footer Section](#footer-section)


### General

In general, most styles on the page are based off the definitions of variables in the variable section of the style sheet:

### Header Section

The header section can be found within the `<header>` tag and simply contains an unordered list of anchors to different sections of the page. If you add a new section and want to be able to quickly navigate to it from the top, simply add another list element with an anchor that has the href of the ID of the section. Conversely, if you remove a section, don't forget to remove the associated navigation element.

If you wish to add a header link to an external page, simply add the class `no-scroll` to the anchor. For example:

```HTML
<li>
    <a href="https://google.com" class="no-scroll">Google</a>
</li>
```

If you wish to have a sticky (fixed) header, you simply need to add a class of `sticky` to the main header. For example, that would be accomplished as follows:

```HTML
<header class="sticky">
    <!-- Header content -->
</header>
```

### Lead Section

The Lead section is pretty straightforward, it contains an h1 for your name and an h2 for your title. It also contains a link that can be used to link to your resume should you wish to add it as well.

If you want your resume to automatically download when the button is clicked instead of opening up in another tab (the default behaviour), add the following code (Thanks to jkfran for the suggestion) in the lead:

```HTML
<a href="path/to/resume.pdf" download="resume.pdf" class="btn-rounded-white">Download Resume</a>
```

The href attribute points to where your resume is stored and the download attribute is what triggers the download / provides the name the file will be downloaded as when the user clicks the button (In this case, it will download as resume.pdf).

### About Section

The about section contains a quick about blurb that can be edited by changing the text within the paragraph tags.

### Experience Section

The experience section creates a vertical timeline with all your relevant experience. The code for the timeline creation can be found within `js/scripts.js` and is an adaptaion of [RyanFitzgerald/vertical-timeline](https://github.com/RyanFitzgerald/vertical-timeline).

The default format is as follows:

```HTML
<div id="experience-timeline">
    <div data-date="September 2015 – September 2016">
        <h3>Employer Name</h3>
        <h4>Job Title</h4>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.
        </p>
    </div>
</div>
```

The data attribute `data-date` is what is used to add a date to the associated timeline point. All that is really required is a wrapping div (i.e. `#experience-timeline`) and nested divs to build the timeline. The h3, h4, and p tags are option and the contents of the div can be styled however you wish.

To add additional section, simply add additional nested divs under the main wrapping div.

### Education Section

The Education is just a series of `.education-block` classes with some details associated with them. By default, it shows school name, date, degree, and some additional details. For example:

```HTML
<div class="education-block">
    <h3>University of Ottawa</h3>
    <span class="education-date">Sept 2016 - Sept 2017</span>
    <h4>Bachelor of Science in Computer Science</h4>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.
    </p>
</div>
```

To add additional section, simply add additional `.education-block` elements.

### Projects Section

The Project section contains a number of `.project` elements that represent each of your projects. By default, it contains a 300x300 image under `.project-image` and relevant project information under `.project-info`. An example is as follows:

```HTML
<div class="project">
    <div class="project-image">
        <img src="images/project.jpg" />
    </div>
    <!-- End .project-image -->

    <div class="project-info">
        <h3>Project Name Here</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.
        </p>
        <a href="#">View Project</a>
    </div>
    <!-- End .project-info -->
</div>
```

If you want to hide some projects by default, you can throw them in an additional row and add the markup for the "Show More" button. This would be done as follows:

```HTML
<!-- Projects Above -->

<a id="view-more-projects" href="#">View More Projects</a>
<div id="more-projects" class="row">
    <div class="project shadow-large">
        <div class="project-image">
            <img src="images/project.jpg" />
        </div>
        <!-- End .project-image -->
        <div class="project-info">
            <h3>Project Name Here</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
            </p>
            <a href="#">View Project</a>
        </div>
        <!-- End .project-info -->
    </div>
    <!-- End .project -->
</div>
```

This will add a link that says "View More Projects" under the current projects and when clicked, all projects in the "More-projects" div will be shown. This is optional functionality and isn't provided by default. It is important that you keep the wrapping div ID intact ("#more-projects") as well as the anchor ID ("#view-more-projects"), however the contents of the div and the anchor text itself can be edited however you like.

#### Projects without images

If you do not wish to have a project image associated with a project, you can simply add `no-image` as an additional class to the project. It would look like the following:

```HTML
<div class="project no-image">
    <div class="project-info">
        <h3>Project Name Here</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.
        </p>
        <a href="#">View Project</a>
    </div>
    <!-- End .project-info -->
</div>
```

### Skills Section

The Skills section is simply an unordered list that spits out a "Skill Cloud" with all the skills listed. To add / remove skills, simply edit or add list elements, like so:

```HTML
<ul>
    <li>JavaScript</li>
    <li>Python</li>
    <li>Ruby</li>
    <li>Go</li>
    <li>Node.js</li>
</ul>
```

### Contact Section

Since the page is static, I opted to use the awesome Formspree to allow for a contact form without the need for anything else. To use it, you must have the page hosted on a server (loading a basic HTML page won't work) where a referrer header is generated. Also, simply add the email to the action. An example is as follows:

```HTML
<form method="POST" action="https://formspree.io/email@email.com">
    <input type="hidden" name="_subject" value="Contact request from personal website" />
    <input type="email" name="_replyto" placeholder="Your email" required>
    <textarea name="message" placeholder="Your message" required></textarea>
    <button type="submit">Send</button>
</form>
```
For more information on configuration of the contact form or dealing with errors, check out [Formspree](https://formspree.io/).

For a quick tutorial about formspree, check out this [tutsplus tutorial](https://webdesign.tutsplus.com/tutorials/quick-tip-add-a-formspree-form-to-your-static-sites--cms-23870) that covers different aspects and features of the form tool.

### Footer Section

The Footer contains an optional copyright where you can place your name as well as an unordered list of all of your social or coding related profiles. By default it contains Github, Stack Overflow, Facebook, Twitter, and Google Plus. You can add or remove them easily and simply use the Font Awesome icon associated with the social profile you wish to use. For a list of all icons, [click here](http://fontawesome.io/icons/).

