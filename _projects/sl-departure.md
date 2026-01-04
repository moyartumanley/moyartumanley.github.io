---
layout: page
title: SL Departure Display
description: An 8x8 pixel display that shows departures for Stockholm public transit. Worked on this during my semester abroad!
img: assets/img/sl-departure/header.gif
importance: 1
category: development
related_publications: false
---
This project turns a Raspberry Pi with an 8x8 senseHat screen into a real-time public transport departure board for the Stockholm Public Transport (SL) system. It uses an external GPS or IP location to find the nearest stations and displays live departure times on 8x8 LED matrix. [Linked is the Github repo!](https://github.com/moyartumanley/SL-Departure-Display)

---

## Features:
* **Real-time Data:** Fetches live departure information from the SL API.
* **Automatic Location:** Uses connected GPS sensor (`/dev/ttyACM0`) as the primary source, falling back to **IP geolocation** for city-level location when GPS fails.
* **Location Update:** Checks every 5 min if the device has moved more than 0.5 km and automatically updates the list of nearest stations.
* **Persistent Operation:** Uses **systemd service** to ensure autostart on boot and auto-restart on crash.
* **Interaction:** Stop navigation and departure selection via the SenseHAT Joystick.
* **Animated Feedback:** Plays a line-specific transit animation followed by a scrolling text display for the selected departure.

---

## Display demo:
<div class="video-container">
    <video controls class="img-fluid rounded z-depth-1" width="auto" height="auto">
        <source src="{{ '/assets/video/sl-departure/demo.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>

