---
tag: "Project-Educational"
image: "/assets/images/mainImage.jpg"

---

{% include postHeader.html image= page.image title= "SwiftDithering" %}

Ahh SwiftDithering, the project that I love the most (at least for the time of writing), this is a project that I dedicated a lot of time into and proves to me that I can do *almost* anything given enough time, discipline and energy.

#### So Let's Start

<h2 class= "orange-font-color"> What's SwiftDithering? </h2>

___

<div class="row px-5">
<img src= "/assets/images/SwiftDithering-Images/SwiftDithering-1.JPG" class= "img-fluid rounded-4 col-md-2">

<div class="col-md  fs-5" markdown=1>

SwiftDithering is a library written in Swift focused on image Dithering and stylization utilizing the native framework called Accelerate. It enables developers access to different dither techniques that Apple doesn't offer in the CIFilter.

<br>

The Dither offered by Apple is a white noise. It's useful. At the same time, it isn't enough for an era where Instagram is one of the biggest apps on the App Store.

</div>

</div>

<br>

___


<div class="row px-5">
<div class="col-md fs-5" markdown=1>
### How it was made?
With a lot of sweat and maths. Jokes aside, accelerate provides images a variety of image buffers and operations. Using this access point. We can modify the buffer to our heart's content*. 

	* There are rules to it, but you have a lot of freedom since it's more low-level code.	

During the development, I felt like the first semester of Computer Science, where I would be manipulating arrays and pointers without other more complex structures, and *oh boy* I forgot how fun it can be. Obviously, here we have a **TON** of things done for us, but still fun nonetheless. 

With these image/color buffers at hand, I made a lot of modifications using maths discovered by people way more intelligent than me, making the images you see in this post possible, from simple Thresholding to Bayer dithering. All was fun to code, and I even got to know a lot more about Swift, like the Multithread operations using DispatchQueues can be safe to access and can speed up a lot, how the debug mode can be way slower than the release *(9 minutes and 45 seconds to 1 minute-ish is a crazy difference)*, it also made me think about optimizations, and how there's a limit of mathematical operations Swift can handle in one single line.

</div>

<img src= "/assets/images/SwiftDithering-Images/SwiftDithering-2.JPG" class= "img-fluid rounded-4 ">

</div>

<br>

___


<div class="row px-5">
<img src= "/assets/images/SwiftDithering-Images/SwiftDithering-3.JPG" class= "rounded-4 col-md-3">

<div class="col-md  fs-5" markdown=1>
### Why?


Firstly, I thought it would be fun, and it was! So I continued. I'm glad that I did. As I stated before, I love this project and it represents what programming is about to me:
	Is not just sitting at a table at the office or at home coding for a company
	But also can be a thing you do because you have curiosity about another topic or just want a challenge.

<br>

I know that because I did this project, I grew as a programmer, even if I still have a long journey ahead of me.

<br>

As some guardians have several children, it's possible to unify certain activities so you can see everyone taking part in them.

</div>

</div>

<br>

___

<div class="row px-5">
<div class="col-md fs-5" markdown=1>
### Features  
So Swift Dithering offers the following dithers:
- Ordered Dithering( Bayer, Central White Point, etc);
- Error Diffusion;
- Floyd-Steinberg and the Stucki variant;
- Threshold (Simple, random, and Fixed).

Almost everything is parametrized with some limitations to prevent crashes, for example, I limit the downsampling factor to 63 since 2^64 is higher than the Int limit. Also, it's always 2 to the power to ensure the image keeps the pixels square. I wanted to give full control while maintaining some level of protection for those who don't know the basics of graphics processing.

</div>

<img src= "/assets/images/SwiftDithering-Images/SwiftDithering-4.JPG" class= "rounded-4 col-md-3">


</div>

___

<div class="row px-5">
<div class="col-md fs-5" markdown=1>

### What the future holds


Well, I wouldn't say SwiftDithering is done.  
I want to create my own kernels in Objective-C so they can be used via CIFilters and hopefully more performative in Floyd-Steinberg, but that's for a future Lugalu.  
You will probably hear from me when I do other filters tho, I only need to decide if they will be packaged together or in a separate module.
</div>
</div>

___

### Where to find

You can find the open source code in my <a href="https://github.com/lugalu/SwiftDithering/tree/main" class="orange-font-color" target="blank">github repo</a> or my <a href="https://swiftpackageindex.com/lugalu/SwiftDithering" class="orange-font-color" target="blank">SwiftPackageIndex page</a>.  
There's also a Sample project in the gitHub repo if you want to test drive it.  
  
Peace,  
Lugalu.


<br>


___


### Image References

- <a href="https://www.pexels.com/photo/clouds-19749161/" class="orange-font-color" target="blank">Clouds</a>
- <a href="https://www.pexels.com/photo/petra-by-night-19845411/" class="orange-font-color" target="blank">Petra by night</a>
- <a href="https://www.pexels.com/photo/a-waterfall-in-the-woods-with-snow-on-it-19915879/" class="orange-font-color" target="blank">A waterfall in the woods with snow on it</a>
- <a href="https://www.pexels.com/photo/time-lapse-photography-of-cars-on-the-road-during-nighttime-12904000/" class="orange-font-color" target="blank">Time Lapse Photography of Cars on the Road during Nighttime
</a>

<br>