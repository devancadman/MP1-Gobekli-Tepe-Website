# Testing

## Contents

* [Functional Testing](#functional-testing)
    * [Home Page](#home-page)
    * [Contact page](#contact-page)
    * [Gallery](#gallery)
* [Compatibility Testing](#compatibility-testing)
    * [Browser Compatibility](#browser-compatibility)
    * [Device Compatibility and Responsiveness Testing](#device-compatibility-and-responsiveness-testing)
* [Validator Testing](#validator-testing)
    * [HTML Validation](#html-validation)
    * [CSS Validation](#css-validation)
    * [Accessibility and Performance](#accessibility-and-performance)
* [Bugs/Issues](#bugs-and-issues)

## Functional Testing

 * ### Home page
    Test | Result
    ---|:---:
    Page responsiveness | ok
    Sticky navbar | ok
    Navigation hover effect | ok
    Logo link back to homepage | ok
    hover effect on all links | ok
    Navigation links to relevant pages | ok
    Navigation Button toggle open/close | ok
    contact us link to contact form | ok
    Sticky Nav not shown on small screen | ok
    Social media icons in the footer link to the relevant social media and open in new tab | ok
    View More button scrolls correctly | ok
 
 - ### About page 
    Test | Result
    ---|:---:
    Page responsiveness | ok
    Videos are responsive | ok
    hover effect on all links | ok
    links to relevant pages/sites | ok

- ### Timeline page 
    Test | Result
    ---|:---:
    Page responsiveness | ok
    Timeline Boxes responsiveness | ok
    Timeline Icons aligned correctly | ok
    Timeline animation works smoothly | ok

 - ### Gallery
    Test | Result
    ---|:---:
    Imagery grid responsiveness | ok
    Image hover effect | ok
    Image Icons aligned correct | ok
    Image figcaption links to relevant pages | ok

- ### Contact page 
    Test | Result
    ---|:---:
    Form responsiveness | ok
    Filling out the booking form | ok
    hover effect on all links | ok
    Input field effects | ok
    Submitting the data | ok
    Submitting form data goes to Code Institute Form Validator | ok

## Compatibility Testing
### Browser Compatibility
The website was tested on the following browsers:
* ![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white) Google Chrome
* ![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white) Mozilla Firefox
* ![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white) Microsoft Edge 
* ![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white) Safari
* ![Avast](https://img.shields.io/badge/Avast-FF7800.svg?style=for-the-badge&logo=Avast&logoColor=white) Avast Browser
* ![Brave](https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white) Brave 
* Polypane


### Device Compatibility and Responsiveness Testing
The website was tested using Google Chrome Developer Tools, [Polypane](https://polypane.app/)  and [BrowserStack](https://www.browserstack.com/). 
#### Tested devices:
* iPhone 5S
* iPhone XR
* iPhone 12 Pro
* Pixel 5
* Samsung Galaxy S8+
* Samsung Galaxy S20 Ultra
* iPad Air
* iPad Mini
* Surface Pro 7
* Surface Duo
* Galaxy Fold
* Samsung Galaxy A51
* Nest Hub
* Nest Hub Max
![Screenshot](/documentation/documentation-images/Responsive-Media-Screens.png)

I have also tested the website on real mobile devices such as Samsung Galaxy S23 Ultra, S10+, Oppo Find X5, Huawei P30 Pro, iPhone 11 and everything renders as intended and it is 100% responsive.


## Validator Testing

### HTML Validation
The [W3C Markup Validation](https://validator.w3.org/) Service was used to validate the HTML of the website and no errors were found on all html files.

![Home page result](/documentation/documentation-images/Home-devancadman-MP1-Gobekli-Tepe-Website-html-Nu-Html-Checker.png)
![About page result](/documentation/documentation-images/About-devancadman-MP1-Gobekli-Tepe-Website-html-Nu-Html-Checker.png)
![Timeline page result](/documentation/documentation-images/Timeline-devancadman-MP1-Gobekli-Tepe-Website-html-Nu-Html-Checker.png)
![Gallery page result](/documentation/documentation-images/Gallery-devancadman-MP1-Gobekli-Tepe-Website-html-Nu-Html-Checker.png)
![Contact page result](/documentation/documentation-images/Contact-devancadman-MP1-Gobekli-Tepe-Website-html-Nu-Html-Checker.png)

### CSS Validation
The [W3C Jigsaw CSS Validation](https://jigsaw.w3.org/css-validator/) Service was used to check the CSS style sheet and no errors were found, just 1 warning.
![CSS check result](/documentation/documentation-images/W3C-CSS-Validator-results-for-style-css-CSS-level-3-SVG-.png)
Warning:
![CSS check warning](/documentation/documentation-images/W3C-CSS-Validator-results-for-style-css-CSS-level-3-SVG-warning.png)

### Font Colour Contrast
The [Coolors Contrast Checker](https://coolors.co/contrast-checker) Tool was used to check the Font Colour Contrast and all were Very Good or Super.
![White text with Navy Background](/documentation/documentation-images/Color-Contrast-Checker-Coolors-navy-white.png)
![Navy Background with White text](/documentation/documentation-images/Color-Contrast-Checker-Coolors-white-navy.png)
![Navy Background with Tan Text](/documentation/documentation-images/Color-Contrast-Checker-Coolors-navy-tan.png)
![Tan Background with Navy Text](/documentation/documentation-images/Color-Contrast-Checker-Coolors-tan-navy.png)


### Accessibility and Performance
[Google Chrome LightHouse](https://developer.chrome.com/docs/lighthouse) was used to check the website performance and accessibility.

#### Results
 * Initial results on performance were low as the website has quite a few images that were large in size, I compressed these using [TinyPNG](https://tinypng.com/) to improve the score.

  |                       **Home page desktop score**                                  |                           **Home page mobile score**                                     |
  |        :----------------------------------------------------------:                |        :-------------------------------------------------------------------:             |
  | [![Home page desktop score](/documentation/page-speed-pdfs/Gobekli-Tepe-Desktop-Page-Speed.png 'Home page desktop score')](/documentation/page-speed-pdfs/Gobekli-Tepe-Desktop-Page-Speed.pdf) | [![Home page mobile score](/documentation/page-speed-pdfs/Gobekli-Tepe-Mobile-Page-Speed.png 'Home page mobile score')](/documentation/page-speed-pdfs/Gobekli-Tepe-Mobile-Page-Speed.pdf)      |
  |                      **About desktop score**                                     |                          **About mobile score**                                        |
  | [![About page desktop score](/documentation/page-speed-pdfs/Gobekli-Tepe-About-Desktop-Page-Speed.png 'About page desktop score')](/documentation/page-speed-pdfs/Gobekli-Tepe-About-Desktop-Page-Speed.pdf) | [![About page mobile score](/documentation/page-speed-pdfs/Gobekli-Tepe-About-Mobile-Page-Speed.png 'About page mobile score')](/documentation/page-speed-pdfs/Gobekli-Tepe-About-Mobile-Page-Speed.pdf)         |
  |                       **Timeline page desktop score**                               |                           **Timeline page mobile score**                                  |
  |  [![Timeline page desktop score](/documentation/page-speed-pdfs/Gobekli-Tepe-Timeline-Desktop-Page-Speed.png 'Timeline page desktop score')](/documentation/page-speed-pdfs/Gobekli-Tepe-Timeline-Desktop-Page-Speed.pdf) | [![Timeline page mobile score](/documentation/page-speed-pdfs/Gobekli-Tepe-Timeline-Mobile-Page-Speed.png 'Timeline page mobile score')](/documentation/page-speed-pdfs/Gobekli-Tepe-Timeline-Mobile-Page-Speed.pdf)   |
    |                      **Gallery desktop score**                                     |                          **Gallery mobile score**                                        |
  |  [![Gallery page desktop score](/documentation/page-speed-pdfs/Gobekli-Tepe-Gallery-Desktop-Page-Speed.png 'Gallery page desktop score')](/documentation/page-speed-pdfs/Gobekli-Tepe-Gallery-Desktop-Page-Speed.pdf) | [![Gallery page mobile score](/documentation/page-speed-pdfs/Gobekli-Tepe-Gallery-Mobile-Page-Speed.png 'Gallery page mobile score')](/documentation/page-speed-pdfs/Gobekli-Tepe-Gallery -Mobile-Page-Speed.pdf)       |
  |                       **Contact page desktop score**                               |                           **Contact page mobile score**                                  |
  |  [![Contact page desktop score](/documentation/page-speed-pdfs/Gobekli-Tepe-Contact-Desktop-Page-Speed.png 'Contact page desktop score')](/documentation/page-speed-pdfs/Gobekli-Tepe-Contact-Desktop-Page-Speed.pdf) | [![Contact page mobile score](/documentation/page-speed-pdfs/Gobekli-Tepe-Contact-Mobile-Page-Speed.png 'Contact page mobile score')](/documentation/page-speed-pdfs/Gobekli-Tepe-Contact-Mobile-Page-Speed.pdf)    |


## Bugs and issues
Their is an issue with the "Dalek" font displaying on Mozilla Firefox as you cna see in the screenshot below. To counteract this I have set the font on Firefox to change from "Dalek" to my site's other font "Inknut Antiqua". Other than this I am not aware of any other bugs or current issues.

![Firefox Font Issue](/documentation/documentation-images/Firefox-Font-Issue.png)

[Back to top](#contents)

[Back to README.md](https://github.com/RicardoLMMatos/Ricardos-mediterranean-restaurant/blob/main/README.md)