import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightcontent',
  templateUrl: './rightcontent.component.html',
  styleUrls: ['./rightcontent.component.css']
})
export class RightcontentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newsdata=[
    {
      id:1,
      title:"Get the Illusion of Fuller Lashes by Mascng.",
      description:"My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable. They’re elegant, smart, beautiful, kind…everything we want to be. At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from the refractor telescope uses a convex lens to focus the light on the eyepiece.The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus the image that you eventually see.Collimation is a term for how well tuned the telescope is to give you a good clear image of what you are looking at. You want your telescope to have good collimation so you are not getting a false image of the celestial body.Aperture is a fancy word for how big the lens of your telescope is. But it’s an important word because the aperture of the lens is the key to how powerful your telescope is. Magnification has nothing to do with it, its all in the aperture.Focuser is the housing that keeps the eyepiece of the telescope, or what you will look through, in place. The focuser has to be stable and in good repair for you to have an image you can rely on.Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount.Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.",
      genre:"LIFESTYLE",
      img:"assets/img/trending/trending_top.jpg"
    },
    {
      id:2,
      title:"WhatsApp down: Facebook, Instagram, WhatsApp",
      description:`WhatsApp, Instagram, and Facebook services are down for the majority of users. Several users have taken to Twitter to report an outage on these platforms. At the time of writing this article, all three services were showing an error that is refreshing. While WhatsApp isn't sending or receiving messages, Instagram shows "couldn't refresh the feed." Similarly, the Facebook page takes forever to load.

      Downdetector confirms that there are issues on WhatsApp, Instagram, and Facebook platforms.
      
      Update: A Facebook spokesperson has emailed India Today Tech a statement about the outage, "We're aware that some people are having trouble accessing our apps and products. We're working to get things back to normal as quickly as possible, and we apologize for any inconvenience."
      
      Marcus Hutchins, a Cybersecurity expert famous on Twitter with the handle MalwareTech, has ruled out global cyber attack possibility. In a tweet, MalwareTech says, "Facebook, Instagram, WhatsApp are all down due to a BGP configuration error, which means it's only a matter of time before someone tweets a pew pew map screenshot and claims it's a global cyber attack.`,
      genre:"TECHNOLOGY",
      img:"assets/img/trending/technology.jpg"
    },
    {
      id:3,
      title:"IPL 2021:Shikhar Dhawan, bowlers help DC outclass CSK in thriller, return to top of table",
      description:`Delhi Capitals held their nerve in a low-scoring thriller against Chennai Super Kings to hand their captain Rishabh Pant a birthday gift on Monday in Match 50 of IPL 2021. With the 3-wicket win over CSK, DC moved to the top of the points table again.

      With 20 points in 13 matches, Delhi Capitals boosted their chances of finishing in the top 2 of the IPL 2021 points table and get an extra shot at reaching the final.Delhi rode on a solid Shikhar Dhawan knock and a cameo from Shimron Hetmyer to gun down 137 in 19.4 overs. This was also DC's 4th straight win over CSK in the IPL.

      The chase ebbed and flowed as Shardul Thakur gave CSK a lifeline by removing R Ashwin and a well-set Dhawan in the same over but Dwayne Bravo was not able to deliver at the death as CSK lost and slipped to the 2nd spot.`,
      genre:"SPORTS",
      img:"assets/img/trending/sports.jfif"
    },
    {
      id:4,
      title:"This artist from Kashmir created the world’s smallest painting of Holy Kabbah on ring, leaf",
      description:`young artist from South Kashmir’s Kulgam district has managed to secure a mention in the Asian and Indian Book of Records for his exceptional talent.

      Mudasir Rehman Dar, 26, from Kulpora village of Kulgam has achieved the feat by creating the smallest painting of the Holy Kabba on a ring and a leaf, which is a first in Jammu and Kashmir.
      
      A self-taught artist, Mudasir said that he has been interested in painting from his childhood but due to the absence of a suitable platform that could have promoted him, he was quite behind in achieving his goals. He is the first artist from Kashmir to be featured in Asia, Indian Book of Records.`,
      genre:"ART",
      img:"assets/img/trending/art.jpg"
    },
    {
      id:5,
      title:"Thousands Throng Barcelona Rock Concert",
      description:`Barcelona: Music fans in Barcelona hugged, danced and sang along at a sold-out rock concert on Saturday night after taking rapid COVID-19 tests in a trial that could revive the live music industry in Spain and beyond. Some 5,000 fans at the show for Spanish indie band Love of Lesbian had to wear masks but social distancing was not required in the Palau Sant Jordi arena.
      "It was spectacular. We felt safe at all times. We were in the front row and it was something we'd missed a lot," said publicist Salvador, 29, after the show. "We are very proud to have had the chance to take part in this. We hope it'll be the first of many."
      
      In surreal scenes after a year of social distancing, fans danced up close to one another, but the sea of faces covered in masks showed that things were not quite back to normal. Health controls at the entrance delayed the start of the concert, but could not dampen the celebratory spirit.
      
      "Welcome to one of the most exciting concerts of our lives!" lead singer Santi Balmes told the crowd to a roar of cheers.
      
      The government-approved concert served as a test for whether similar events will be able to start up again."It will be safer to be in the Palau Sant Jordi than walking down the street," concert co-organiser Jordi Herreruela told Reuters earlier on Saturday.`,
      genre:"CONCERT",
      img:"assets/img/trending/right1.jpg"
    },
    {
      id:6,
      title:"99% sea birds will have plastic in their guts by 2050",
      description:`Nearly 60 percent of seabird species like penguins, gulls and albatrosses have plastic in their gut and by 2050 this may rise to 99 percent, a new study says.

      The scientists estimate that 90 per cent of all seabirds alive today have eaten plastic of some kind. This includes bags, bottle caps, and plastic fibres from synthetic clothes, which have washed out into the ocean from urban rivers, sewers and waste deposits.
      
      Birds mistake the brightly colored items for food, or swallow them by accident, and this causes gut impaction, weight loss and sometimes even death.`,
      genre:"SEA BEACH",
      img:"assets/img/trending/right2.jpg"

    },
    {
      id:7,
      title:"No Biking Like Tom Cruise, Mumbai Police Warns Stunt Bikers",
      description:`Mumbai: Warning bikers against performing stunts on the city roads, Mumbai Police have tweeted a clip from Hollywood star Tom Cruise's latest release 'Mission Impossible- Fallout". The 12-second clip shows Tom Cruise riding a bike in style without wearing a helmet and colliding with a car while looking back.
      "Not an impossible mission for us to penalize you if you are spotted trying these stunts on the road of Mumbai! That's the job. No hard feelings," the tweet warned stunt bikers who might feel tempted to replicate Tom  Cruise
      
      Spots like Marine Drive, Bandra Reclamation stretch that starts after the sealink towards the Western Express Highway, Bandra, Govandi are favourites ared hot spots for bikers. 
      
      Mumbai Police has also urged bikers to wear helmets and avoid rash driving with the hash tags "safety is possible" and "Say no to rash driving.`,
      genre:"BIKE SHOW",
      img:"assets/img/trending/right3.jpg"

    },
    {
      id:8,
      title:"World's longest natural sea beach under threat",
      description:`Cox's Bazar in Bangladesh is the world's longest natural sea beach, and a popular tourist destination in the country.But while it has traditionally been celebrated for its lack of development, there are now growing fears that new buildings being constructed along the beach are going to threaten its environment and wildlife.`,
      genre:"SEE BEACH",
      img:"assets/img/trending/right4.jpg"
    },
    {
      id:9,
      title:"Snow-Forecast’s Rolling News on Ski Resorts Re-Opening",
      description:"My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable. They’re elegant, smart, beautiful, kind…everything we want to be. At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from the refractor telescope uses a convex lens to focus the light on the eyepiece.The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus the image that you eventually see.Collimation is a term for how well tuned the telescope is to give you a good clear image of what you are looking at. You want your telescope to have good collimation so you are not getting a false image of the celestial body.Aperture is a fancy word for how big the lens of your telescope is. But it’s an important word because the aperture of the lens is the key to how powerful your telescope is. Magnification has nothing to do with it, its all in the aperture.Focuser is the housing that keeps the eyepiece of the telescope, or what you will look through, in place. The focuser has to be stable and in good repair for you to have an image you can rely on.Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount.Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.",
      genre:"SKIING",
      img:"assets/img/trending/right5.jpg"
    }

  ];

}
