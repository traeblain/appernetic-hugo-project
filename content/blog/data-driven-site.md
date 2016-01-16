---
title: Data Driven Site
date: 2016-01-15T17:58:38-06:00"
draft: true

---

I'm quite proud of my homepage.  As I said before, I used to use services like [Flavors.me][] and [About.me][] for my main page because they did something particular...that gathered my info in one place.  From social sites to image sites, these tools did that easily.  But I started to realize I wasn't showing what I really wanted...additionally I was having a hard time keeping those connections up as well.  So it was time to make my own.

## Requirements

I had some initial requirements.  There's weren't hard requirements, but based on my previous experiences, I found that I should listed to a number of these.

#### Easy Create in My Tool-Chain

First question is: "What's your tool-chain?"  In simplest terms, I switch from [Pelican][]'s excellent static site generator, to [Hugo][].  If I couldn't get the system to work in Hugo, it would mean look at a new system.  Functionally, we are good.

#### No or Minimal Back-end Work

Where I can setup any back-end tool I want on my VPS, I didn't want to maintain it.  There is a possibility I could use [Firebase][], but it wasn't sure on the details.  So I needed a tool that provides my back-end.  This site does this through some creative wrangling (more on this later).

#### Complete Integration with My Notebook

This works because it works with Hugo.  But separating the two wasn't out of the question.  

## The Site

Ok, so let's move down the page and talk about what/how/why/etc.

#### Interactive Title Banner

After first figuring out what am I going to do with my [previous monogram][tbm], I finally rested on the above.  Then what else.  I decided I'd theme the site with low-polygonal images.  So the title had reflect that.  I found the awesome javascript called: [Pt][].  I randomly found this through a Hacker News post and the demo, [Points][], was perfect.  I basically used that demo code and implemented my monogram, size, and color scheme.  If you haven't tried it yet, you should...move your mouse around the title and watch the tet's follow you around.  Fun!

#### Fitbit and Dash

This was hard.  I really wanted more detailed [Fitbit][] and driving data (using [Dash][]) on the page.  But getting to it without exposing a personal API key seemed impossible.  This is where some nice tools came in.  I didn't need 100% of the data, just last month or so.  So I am using [IFTTT][] to send updates to a Google Spreadsheet.  From there I was just going to ping the sheet, but Google restricts this through CORS, so I hit my first hurdle.  

##### Personal API

I actually was able to make a personal API.  Using [APISpark from Restlet][apispark], I'm able to use Google Spreadsheets as my data store and make them accessible from an API call.

`http://traeblain.apispark.net/v1/fitbit/`

Check it out.  There's nothing on that I don't care being out in the open, but it's pretty need to see what's happening.  I have one for Fitbit, Dash, my Book reading, my Music (more on that later), and Twitter statuses.  If I want more, it only requires me to see what IFTTT can offer and push it to a Spreadsheet.

(Later on, I may dump the spreadsheet entirely and have IFTTT post directly to the API...but my Google Sheet is doing some calculation legwork for me at times and I'd have to be able to replicate that.)

##### Graphs

I always wanted graphs on my site.  I'm a bit nerdy like that.  But never could figure out the best way.  The Fitbit and Driving data created the best tool to add graphs.  So I did.  I fought with finding the proper graphing library.  I started with [c3.js][c3], but didn't like working with the library for specific needs, went back to the ole faithful [Chart.js][chart], but again found working the graphs problematic.  Again on a random Hacker News read, I remembered [Plot.ly][plot] open-sourced there javascript charting engine.  So I plugged it in and...Wow, it worked exactly like I wanted right out of the box.  It's not perfect (can't show details of two data points on the same x-axis), but works really well.  Unfortunately, it's the largest item on the site so it's the heaviest part to download. But I think it's worth it.

#### "Tabs"

Another hurdle was figuring out how to present the data.  After looking through some options, I like my CSS only slider style "Tabs".  It hides other information but brings it forward when you want.  It's a little bit of flair that I like to see.

#### Social

Again, grabbing my latest tweet from Twitter's API required me creating some back-end pass-through or exposing my API token.  So I use IFTTT to dump my tweet and get the data from my Personal API.  Same for Goodreads, although I have to use Goodread's RSS feed and do some wicked work on the formatting because of this...but it looks good.  Github was a letdown.  The details I wanted aren't easily available.  So I'm using the [contributions graph][ghgraph] third-party service which gets me an image.  Also, I'm hosting this site on [GitLab][] for now, I'm trying it out as an alternative but will probably move it to Github soon.

#### Sensory

Utilizing my Personal API, I gather my listening data from Last.fm.  This is one area I'd like to work on.  Spotify has some neat widgets and I've seen some really awesome data around people's playlists, but I don't use Spotify.  I have become a big fan of Amazon Music.  Being a Prime customer it is an amazing system.  But I can't get data out.  Since I do 90% of my listening on my phone or desktop, I can scrobble.  That's why Last.fm still gets my data.  From there it's to a spreadsheet!  Movies and Television data come from [Trakt][].  I've been using Trakt for a long time and recently realized it has really help me keep track of what season I'm on in various shows.  And I've just started recording my movie watching with it.  So I might as well get the data!

#### Misc

Lastly, I have some random bits I wanted to include.  I've always shown my PGP data one way or another, but this allowed me full control.  So I've got my data right there to see and available for anyone to use.  If there are questions about identity, I really like [Keybase][]'s (I have invites...) form of identity management.  And because I finally broke down and figure Bitcoin isn't going anywhere, I got an address...feel free to send me some.

## Back-end

So this doesn't disappear.  I still serve everything on a VPS, so I still need a webserver.  What makes this interesting is that I found [Caddy][].  Caddy is a single executable that works close to Nginx, but is so much simpler to use.  It also has some integrated features for Hugo and more.  Additionally, it automatically integrates HTTPS with [Let's Encrypt][le] so I have fully encrypted site (save some of the images from above) without the hassle of dealing with a CA and server setup.  It was the fastest I got from, clean VPS install to up and running I have ever had...I'm still amazed.

## Summary

That's the gist.  It's pretty neat to have a semi-dynamic site that is built with a static site generator.  I plan on playing more with Restlet's APISpark to see what else I can make it do, but for now the Google Sheets is doing fine.  I might also explore Firebase or [Stamplay][] in the future, but happy with what APISpark is providing.  Since I cannot really beta test a personal site, if you run into any bugs, ping me.  I'm still learning and hope to have some better idea as things go...might even add more info...more data!!

[Flavors.me]: http://flavors.me/
[About.me]: http://about.me/
[Pelican]: http://blog.getpelican.com/
[Hugo]: http://gohugo.io/
[Pt]: http://williamngan.github.io/pt/
[Points]: http://williamngan.github.io/pt/demo/index.html?name=form.points
[Fitbit]: http://fitbit.com/
[Dash]: http://dash.by/
[IFTTT]: http:/ifttt.com/
[apispark]: http://restlet.com/products/apispark/
[chart]: http://www.chartjs.org/
[c3]: http://c3js.org/
[plot]: https://plot.ly/javascript/
[ghgraph]: http://ghchart.rshah.org/
[GitLab]: http://gitlab.com/
[Trakt]: http://trakt.tv/
[Keybase]: http://keybase.io/
[Caddy]: https://caddyserver.com/
[le]: https://letsencrypt.org/
[Stamplay]: https://stamplay.com/