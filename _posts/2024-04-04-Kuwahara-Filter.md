---
tag: "Project-Educational"
image: "/assets/images/Kuwahara-Images/City.JPG"

---

{% include postHeader.html image= page.image title= "Kuwahara Filter" %}

The Great Kuwahara Filter it's wonders and difficulties, this post is about how I did it, what can I learn for future projects, my dificulties, and last but not least how fun it was.

### So Let's Go

<h2 class= "orange-font-color"> What's the Kuwahara Filter? </h2>

___

<div class="row px-5">
<img src= "/assets/images/Kuwahara-Images/Clouds.JPG" class= "img-fluid rounded-4 col-md-2">

<div class="col-md  fs-5" markdown=1>

Kuwahara Filter is a denoising technique, during it's time was a greate inovation to the world of machine assisted exams, things like X-Rays, Ultrasound, etc.

<br>

With time better denoise techniques appeared and this filter started being used in a different direction stylization, the way this filter tries to preserve edges and at the same time denoise creates a painting-like effect on images, that can be interesting.

</div>

</div>

<br>

___

<div class="row px-5">
<div class="col-md fs-5" markdown=1>
### How it was made?
With lots and lots of research, my implementation is now based on <a href="https://github.com/GarrettGunnell/AcerolaFX/blob/main/Shaders/AcerolaFX_KuwaharaFilter.fx" class="orange-font-color" target="blank">Acerola AcerolaFX implementation</a> but with other researches on shader toy and google in general to implement the Generalized Variant.

<br>

With this out of the way let's talk about ***CIFilters***  
CIFilter are Apple's implementation of Image Filters they can be made with Deprecated OpenGL or Metal CI, unfortunately Metal CI is not available for SPM yet since we can't specify build rules, that means we need to use the deprecated variant. No problem right?
</div>

<img src= "/assets/images/Kuwahara-Images/Forest.JPG" class= "img-fluid rounded-4 ">

</div>

<br>

___

<div class="row px-5">
<img src= "/assets/images/Kuwahara-Images/Trees.JPG" class= "rounded-4 col-md-3">

<div class="col-md  fs-5" markdown=1>
### About that


Since is a deprecated feature there's some jank attached to it, firstly we have to specify a cSetting called: *CI_SILENCE_GL_DEPRECATION* so we don't get pesky and annoying warning in other's people projects.
<br>

Now we simply have to make a giant string with Apple's OpenGL implementation...

<br>

You didn't read it wrong the solution is a giant string, you can choose 2 ways  
		`"kernel float4 yourThing(){" + "return float4(1); }"`  
or <code style="display:block; white-space:pre-wrap">
"""  
 kernel float4 yourThing() {  
   return float4(1);
 }
"""
</code>  
I Used the second one since is cleaner has better identation, and is easier to see mistakes, but according to my limited sample size people tend to use the string concatenation for some reason.  

even with this weird thing on the way I was able to learn the language by hitting my head against it until stuff worked, sometimes it's incredible what can you learn by just brute forcing ***XD***.

</div>

</div>

<br>

___

<div class="row px-5">
<div class="col-md fs-5" markdown=1>
### What Did I learn  
Besides a new language? not much to be honest, a lot of the math behind this filter went over my head, they look like ancient hieroglyphs for me, at least this shows me that I really need to pick my math studies up.

</div>

<img src= "/assets/images/Kuwahara-Images/LightRay.JPG" class= "rounded-4 col-md-3">

</div>

___

<div class="row px-5">
<div class="col-md fs-5" markdown=1>

### What the future holds


I already have the next project in my mind.   
I Plan to update SwiftDithering to support CIFIlters with this technique that I found, unfortunately Floyd-Steinberg can't be ported, but SwiftDithering can still keep it's CPU variant because is fast enough, different from this one.
</div>
</div>

___

### Where to find

As Always you can find the open source code in my <a href="https://github.com/lugalu/KuwaharaFilter" class="orange-font-color" target="blank">github repo</a> or my <a href="https://swiftpackageindex.com/lugalu/KuwaharaFilter" class="orange-font-color" target="blank">SwiftPackageIndex page</a>.  
There's also a Sample project in the gitHub repo if you want to test drive it. I plan to create a new repo with all the sample apps if I find another interesting visual effect to boot, but no promises ***yet***.  

Peace,  
Lugalu.


<br>


___

### Image References

- <a href="https://www.pexels.com/photo/bird-s-eye-view-photography-of-lighted-city-3573383/" class="orange-font-color" target="blank">Bird's Eye View Photography of Lighted City</a>
- <a href="https://www.pexels.com/photo/clouds-19749161/" class="orange-font-color" target="blank">Clouds</a>
- <a href="https://www.pexels.com/photo/green-leafed-tree-338936/" class="orange-font-color" target="blank">Green Leafed Tree
</a>
- <a href="https://www.pexels.com/photo/a-waterfall-in-the-woods-with-snow-on-it-19915879/" class="orange-font-color" target="blank">A waterfall in the woods with snow on it</a>
- <a href="https://www.pexels.com/photo/time-lapse-photography-of-cars-on-the-road-during-nighttime-12904000/" class="orange-font-color" target="blank">Time Lapse Photography of Cars on the Road during Nighttime
</a>

<br>

