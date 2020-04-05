
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": "My name is Mohammed Bala and I’m a Civil Engineer from Los Angeles. I’ve got a passion for structures, web development, learning new things, and organized spaces. I’ve started this blog to share as much as I can about my work to anyone interested enough to read. If you’ve got comments or questions about anything you see on the blog, I’m always happy to chat. You can reach me at mohammedbala@icloud. com. "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           11 Questions for the PE Seismic Exam                              :               :                                                                       12 May 2019                &lt;/span&gt;                                                                                                                                                                                                                                                                                                              Walkthrough of the Response Spectrum Method                              :               A number of months ago a put together a video that goes into the covers the Response Spectrum Method as it is implemented in ASCE. . . :                                                                       27 Apr 2019                &lt;/span&gt;                                                                                                                  All Stories:                                                                                                     11 Questions for the PE Seismic Exam              :       :                               12 May 2019        &lt;/span&gt;                                                                                                                             Relative Rigidity - Review on Calculating Lateral Force to Shear Walls              :       In this video I provide a brief overview on how to calculate lateral force to concrete shear walls based on relative rigidity::                               11 May 2019        &lt;/span&gt;                                                                                                                             How to Calculate Base Shear per ASCE 7              :       In this video I provide an example on how to calculate base shear via the equivalent lateral force method perscribed in ASCE 7-10::                               04 May 2019        &lt;/span&gt;                                                                                                                             Walkthrough of the Response Spectrum Method              :       A number of months ago a put together a video that goes into the covers the Response Spectrum Method as it is implemented in ASCE 7-10. My aim was to. . . :                               27 Apr 2019        &lt;/span&gt;                                                                                    Mechanics of Materials Review - Bending, Shear, and Axial Stresses              :       One thing I struggled with as I started working in structural engineering was having a complete, and comprehensive understanding of where stresses occur and how they interact with each other. . . . :                               20 Apr 2019        &lt;/span&gt;                                                                                    Hi              :       I’ve decided to start a blog to record the work I’ve done in civil/structural engineering. I’m doing this as a means of not only passing knowledge on to others at. . . :                               13 Apr 2019        &lt;/span&gt;                                    "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/peseismicquiz/",
    "title": "11 Questions for the PE Seismic Exam",
    "body": "2019/05/12 - "
    }, {
    "id": 6,
    "url": "http://localhost:4000/relativerigidity/",
    "title": "Relative Rigidity - Review on Calculating Lateral Force to Shear Walls",
    "body": "2019/05/11 - In this video I provide a brief overview on how to calculate lateral force to concrete shear walls based on relative rigidity: "
    }, {
    "id": 7,
    "url": "http://localhost:4000/Base-Shear/",
    "title": "How to Calculate Base Shear per ASCE 7",
    "body": "2019/05/04 - In this video I provide an example on how to calculate base shear via the equivalent lateral force method perscribed in ASCE 7-10: "
    }, {
    "id": 8,
    "url": "http://localhost:4000/responsespectrum/",
    "title": "Walkthrough of the Response Spectrum Method",
    "body": "2019/04/27 - A number of months ago a put together a video that goes into the covers the Response Spectrum Method as it is implemented in ASCE 7-10. My aim was to tailor the review to tailor the video to those who are not familiar as to how the method is used in code, and do so through an approach that actually shows the viewer how one can generate their own spectra. For fun, I decided to use data from the El Centro Earthquake to generate my own spectra in an IPython notebook. If you would like to learn more about the Response Spectrum Method, or Earthquake Engineering in general, I would recommend reading Dynamics of Structures by Anil K. Chopra. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/knowyourstress/",
    "title": "Mechanics of Materials Review - Bending, Shear, and Axial Stresses",
    "body": "2019/04/20 - One thing I struggled with as I started working in structural engineering was having a complete, and comprehensive understanding of where stresses occur and how they interact with each other. This really comes in handy when it comes to determining boundary conditions and design connections, especially welds.  I am an MC over I enginer. The above quote was told to me by a senior technical lead when I was starting out, and it has since followed me through all the work I’ve done. I mention this because many engineers don’t understand how critical knowledge of the fundamentals are - a mentality that inevitably leads to garbage in garbage out design. Key Concepts: Bending Stress: This is literally what it sounds like - you bend something, stresses will result in that thing, usually at the top and bottom or sides of the section (shape).  This is the flexural stress distribution of a section, as you can see the stresses are highest at the top and the bottom and they are zero in the center - that is the neutral axis. The fact that the stresses point in either direction mean that one side is in tension and the other is in compression.  To visualize how this works take a pencil, grab it with both hands, put your thumbs to the center, and apply force. The side opposite your thumbs is in tension and the side your thumbs are pressing on is in compression. This happens because the force you are applying to the center of the pencil is causing a bending moment in the pencil. We’ll now look exactly how to calculate bending stress. We will use the variable f with subscript b to represent bending stress ($f_b$), although you will find many books use sigma ($\sigma$) or other variables in their nomenclature. Equation 1 below ${M =} \text{ Bending Moment}$ ${c =} \text{ Distance to the Point to extreme fiber from the Neutral Axis}$ ${I =} \text{ Second Moment of Area }$ Equation 1 is the classic formula for determining bending stress in a beam based Euler-Bernoulli Beam Bending Theory. The implication here is that if you know that given you know the section properties of an element and the stress being applied, you can calculate the stress at any point. Shear Stress: Shear stress can be a bit more difficult to visualize and understand then bending stress. Both stresses occur from a force acting ona nelement however with shear stress the main idea is that the stress is acting across the face of a material rather than towards the face like with bending stress.  This is the shear stress distribution of a section, you can see that the highest concentration of shear is in the center of the section and the lowest is on the top of the section - opposite of bending stress.  Remember the pencil you just pushed against with your thumbs? That was also seeing shear stress. In fact, if you were to continue to apply more force, it would break in one of two ways: the wood fibers in the top or bottom of the pencil would reach their yield point and rip apart, or the whole section would “cut” across do to the high concentration of shear. We’ll now look exactly how to calculate shear stress. We will use the variable f with subscript v to represent shear stress ($f_v$), although you will find many books use tau ($\tau$) or other variables in their nomenclature. Equation 1 below ${V =} \text{ Shear Force}$ ${Q =} \text{ First Moment of Area}$ ${b =} \text{ Width of Section (Perpendicular to Shear) }$ ${I =} \text{ Second Moment of Area }$ Axial Stress: Axial stresses seem to be the easiest to understand (at least they always were for me). These stresses occur along the longitudinal axis of whatever your are pulling or pushing on.  This is the axial stress distrbution of a section. Simple right? It occurs uniformly over the shape of a section, just the force over the area.  Grab your pencil again. This time don’t place your thumbs on the center of the pencil, but rather, place both hands on it and pull them away from each other as hard as you can. You can imagine that if you were superman, you would pull the pencil so hard that it would split apart. Axial stress. ${N =} \text{ Axial Force}$ ${A =} \text{ Area}$ Example: Problem: Consider a simply supported beam with a load acting at the center and an axial load at the end. Calculate the maximum bending, shear, and axial stresses. Solution: The reactions for the beam are resolved as follows: Beam Properties: $b = 18in$ $h = 30in$ $c = \frac{h}{2} = 15in$ $A = b*h = 18in * 30in = 540 in^2$ $Q =\frac{A}{2} * \frac{h}{4} = \frac{18in*30in}{2} * \frac{30in}{4} = 2025 in^3$ $I =\frac{bh^3}{12} = \frac{18in*(30in)^3}{12} = 40500in^4$ Maximum Forces in Beam: Axial Force: $N = 10 kip$ Shear Force: $V = 2. 5 kip$ Bending Moment: $M =\frac{P * L}{4} = \frac{5 kip * 20ft}{4} = 25 kip*ft$ Maximum Stresses in Beam: Axial Stress: $f_a =\frac{N}{A} = \frac{10 kip}{540 in^2} = 0. 018 ksi$ Shear Stress: $f_v =\frac{VQ}{Ib} = \frac{2. 5 kip * 2025 in^3}{40500 in^4 * 18in} = 0. 007 ksi$ Bending Stress: $f_b =\frac{Mc}{I} = \frac{25 kip*ft * 15 in}{40500 in^4} = 0. 009 ksi$ "
    }, {
    "id": 10,
    "url": "http://localhost:4000/Hi/",
    "title": "Hi",
    "body": "2019/04/13 - I’ve decided to start a blog to record the work I’ve done in civil/structural engineering. I’m doing this as a means of not only passing knowledge on to others at an earlier, or perhaps, different stage of their career, but to also pass knowledge on to my future self. Considering how much I remember about just a few years ago, this will surely come in handy. Accordingly, I’m developing a course plan for folks interested in structural engineering. One that follows my development as a young engineer. I’m starting out with the basic principles that were reinforced in me as I exited university and began my working career. Topics I plan on covering will include but are not limited to:  Mechanics of Materials - Know Your Stresses Gravity Loads - What to Design For and Where to Look Lateral Loads - Wind Lateral Loads - Seismic Foundations - Designing from the Ground Up Steel Connections Concrete Lateral Force Resisting Systems Software Career Options as a Structural Engineer"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});